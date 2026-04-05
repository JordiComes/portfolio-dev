require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:4200';

// ── CORS ─────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: ALLOWED_ORIGIN,
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10kb' }));

// ── Rate limiting ─────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Demasiadas peticiones. Inténtalo más tarde.' },
});

// ── Brevo SMTP ────────────────────────────────────────────────────────────────
const mailer = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.BREVO_SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

async function sendNotificationEmail({ name, email, message }) {
  await mailer.sendMail({
    from: `"Portfolio" <${process.env.BREVO_FROM_EMAIL}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `📩 Nueva solicitud de CV - ${name}`,
    html: `
      <h2>Nueva solicitud de CV recibida</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Mensaje:</strong></p>
      <blockquote style="border-left:4px solid #ccc;padding-left:12px;color:#555;">${message.replace(/\n/g, '<br>')}</blockquote>
    `,
  });
}

// ── MongoDB ───────────────────────────────────────────────────────────────────
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB:', MONGODB_URI))
  .catch((err) => { console.error('❌ Error conectando a MongoDB:', err.message); process.exit(1); });

const contactSchema = new mongoose.Schema({
  name:      { type: String, required: true, maxlength: 100 },
  email:     { type: String, required: true, maxlength: 254 },
  message:   { type: String, required: true, maxlength: 2000 },
  ip:        { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// ── Helpers de validación ─────────────────────────────────────────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateContact({ name, email, message }) {
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return 'El nombre debe tener entre 2 y 100 caracteres.';
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim()) || email.length > 254) {
    return 'El email no tiene un formato válido.';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000) {
    return 'El mensaje debe tener entre 10 y 2000 caracteres.';
  }
  return null;
}

// ── Endpoint POST /api/contact ────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message, website } = req.body;

  // Honeypot: si viene relleno es un bot
  if (website && website.length > 0) {
    return res.status(400).json({ success: false, error: 'Bot detected.' });
  }

  const validationError = validateContact({ name, email, message });
  if (validationError) {
    return res.status(400).json({ success: false, error: validationError });
  }

  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;

    await Contact.create({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      message: message.trim(),
      ip,
    });

    console.log(`📨 Nuevo mensaje de ${name.trim()} <${email.trim()}>`);

    sendNotificationEmail({ name: name.trim(), email: email.trim(), message: message.trim() })
      .then(() => console.log('✉️  Email de notificación enviado a', process.env.NOTIFY_EMAIL))
      .catch((err) => console.error('⚠️  Error enviando email de notificación:', err.message));

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error guardando contacto:', err.message);
    return res.status(500).json({ success: false, error: 'Error interno del servidor.' });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

# Componentes

## Navbar (`components/navbar/`)

Barra de navegación fija en la parte superior.

### Comportamiento
- **Transparente** al inicio, transiciona a fondo semitransparente con `backdrop-filter: blur(10px)` al hacer scroll (>50px)
- **Links**: About, Projects, Contact — smooth scroll hacia cada sección
- **Mobile**: menú hamburguesa que abre overlay lateral con animación slide-in
- **Logo**: "JCO." con punto en dorado

### Estado (Signals)
- `isScrolled: signal<boolean>` — detecta si se ha hecho scroll
- `menuOpen: signal<boolean>` — controla el menú mobile

### Métodos
- `scrollTo(id: string)` — navega suavemente a una sección
- `toggleMenu()` — abre/cierra el menú mobile
- `closeMenu()` — cierra el menú

---

## Hero (`components/hero/`)

Sección de presentación que ocupa toda la pantalla.

### Layout
- `min-height: 100vh`, centrado vertical con flexbox
- Fondo con dos gradientes radiales animados (dorado y azul) a baja opacidad

### Contenido
- Greeting: "Hola, soy"
- Nombre: "Jordi Comes Orrit"
- Rol: "Full Stack Developer | AI Integrations"
- Tagline descriptivo
- CTA button: "Ver Proyectos" → scroll a Projects

### Animaciones
- Cada elemento tiene `fadeInUp` con delays escalonados (0.2s, 0.4s, 0.6s, 0.8s, 1s)
- Gradientes de fondo pulsan con `animation: pulse 8s ease-in-out infinite`
- Indicador de scroll (mouse icon) en la parte inferior

---

## About (`components/about/`)

Sección de biografía y stack tecnológico.

### Layout
- **Mobile**: una columna, imagen arriba, texto abajo
- **Tablet+**: dos columnas (imagen 1fr, texto 1.5fr)

### Contenido
- Placeholder de imagen con iniciales "JCO" y decoración con borde dorado offset
- Bio en español (4 párrafos)
- Pills de tecnologías: JavaScript, TypeScript, Angular, React.js, Node.js, PHP, AI/ML, REST APIs

### Animaciones (ScrollAnimation)
- Imagen: entra desde la izquierda (`direction="left"`)
- Texto: entra desde la derecha (`direction="right"`)
- Tech stack: entra desde abajo con delay (`direction="bottom" delay=200`)

---

## Projects (`components/projects/`)

Grid de proyectos con cards interactivas.

### Layout
- **Mobile**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 3 columnas
- Gap de 1.5rem

### Card Design
- Fondo `$bg-tertiary`, borde sutil, border-radius 8px
- **Hover**: lift (-4px), borde dorado, sombra glow
- Icono de carpeta SVG en dorado
- Título, descripción, tags de tecnologías

### Datos
Array de 6 proyectos definidos inline en el componente, cada uno con:
- `title: string`
- `description: string`
- `tags: string[]`

### Animaciones (ScrollAnimation)
- Cards alternan entrada izquierda/derecha según índice par/impar
- Delay escalonado: `index * 100ms`

---

## Contact (`components/contact/`)

Formulario de contacto con validación reactiva.

### Formulario (Reactive Forms)

| Campo | Tipo | Validaciones |
|---|---|---|
| name | `text` | required, minLength(2) |
| email | `email` | required, email |
| message | `textarea` | required, minLength(10) |

### Comportamiento
- **Submit válido**: muestra mensaje de éxito con icono de check, resetea el formulario
- **Submit inválido**: marca todos los campos como touched para mostrar errores
- **Sin backend**: no se envían datos a ningún servidor

### Estado (Signals)
- `submitted: signal<boolean>` — controla la vista éxito vs formulario

### Estilos
- Inputs con fondo oscuro, borde sutil que transiciona a dorado on focus
- Mensajes de error en rojo (#e74c3c)
- Botón submit dorado con hover lift

### Footer
Incluido en el template del Contact:
- Copyright 2026
- Borde top sutil como separador

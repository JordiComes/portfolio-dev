# Portfolio - Jordi Comes

Portfolio personal desarrollado con Angular 21, con una estética cinematográfica gótica inspirada en Death Stranding.

## Tecnologías

- **Framework:** Angular 21.2.6
- **Estilos:** SCSS con sistema de variables, mixins y animaciones custom
- **Idiomas:** Soporte bilingüe Español / Inglés (sistema i18n propio)

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── intro/        # Pantalla de introducción cinematográfica
│   │   ├── hero/         # Sección principal con presentación
│   │   ├── navbar/       # Barra de navegación
│   │   ├── about/        # Sección "Sobre mí"
│   │   ├── projects/     # Galería de proyectos
│   │   └── contact/      # Formulario/sección de contacto
│   ├── pipes/
│   │   └── roman-numeral.pipe.ts  # Pipe para convertir números a romanos
│   └── i18n/
│       └── translations.ts        # Traducciones ES/EN
├── styles/
│   ├── _variables.scss   # Paleta de colores, breakpoints, mixins
│   ├── _typography.scss  # Tipografías y escalas de fuente
│   └── _animations.scss  # Keyframes y clases de animación
└── index.html
```

## Características de diseño

### Intro cinematográfica
Pantalla completa de bienvenida con capas de niebla animada, partículas flotantes, formas SVG orgánicas y texto con efecto blur-reveal. Se desvanece automáticamente tras 4 segundos.

### Paleta "Cinematic Gothic"
- **Fondos:** Tonos oscuros azulados (`#0a0b0f`, `#0f1116`, `#14161d`)
- **Acentos:** Ámbar/dorado (`#b8860b`) con efectos glow
- **Texto:** Blancos cálidos con secundarios en gris azulado

### Sistema de animaciones
Animaciones reutilizables organizadas por categoría:
- **Entrada:** fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn
- **Atmosféricas:** pulse, pulse-glow, float, drift, mist-move, grain, shimmer, breathe
- **Partículas:** particle-float
- **Intro:** intro-fade, intro-text-reveal, intro-line-draw

### Efectos visuales globales
- Capa de atmósfera con gradientes radiales animados
- Overlay de grano cinematográfico (film grain)
- Decoraciones de esquina en secciones
- Backdrop blur en tarjetas (`card-backdrop` mixin)
- Text glow en encabezados (`text-glow` mixin)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4200)
ng serve

# Build de producción
ng build

# Tests unitarios
ng test
```

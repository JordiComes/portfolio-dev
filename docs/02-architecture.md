# Arquitectura del Proyecto

## Estructura de Archivos

```
portfolio/
├── docs/                          # Documentación
├── src/
│   ├── styles/                    # SCSS parciales globales
│   │   ├── _variables.scss        # Paleta de colores, breakpoints, mixins
│   │   ├── _typography.scss       # Fuentes y escala tipográfica
│   │   └── _animations.scss       # Keyframes reutilizables
│   ├── styles.scss                # Estilos globales (reset, utilidades)
│   ├── index.html                 # HTML raíz con meta tags y Google Fonts
│   ├── main.ts                    # Bootstrap de la aplicación
│   └── app/
│       ├── app.ts                 # Componente raíz (shell)
│       ├── app.html               # Template del shell
│       ├── app.scss               # Estilos del shell
│       ├── app.config.ts          # Configuración (providers)
│       ├── components/
│       │   ├── navbar/            # Navegación fija
│       │   ├── hero/              # Sección principal (100vh)
│       │   ├── about/             # Biografía y tech stack
│       │   ├── projects/          # Grid de proyectos
│       │   └── contact/           # Formulario de contacto + footer
│       └── directives/
│           └── scroll-animation.ts # Directiva de animación por scroll
├── angular.json                   # Configuración de Angular CLI
├── package.json                   # Dependencias y scripts
└── tsconfig.json                  # Configuración TypeScript
```

## Flujo de Datos

```
app.ts (shell)
  ├── navbar    → señales: isScrolled, menuOpen
  ├── hero      → sin estado, solo UI
  ├── about     → array de tecnologías, usa ScrollAnimation directive
  ├── projects  → array de proyectos inline, usa ScrollAnimation directive
  └── contact   → FormGroup reactivo, señal: submitted
```

## Decisiones de Arquitectura

### Sin NgModules
El proyecto usa exclusivamente standalone components (Angular 21+). Cada componente declara sus propios `imports` directamente en el decorador `@Component`.

### Sin Routing
Al ser una landing page de una sola página, no se necesita Angular Router. La navegación se implementa con `scrollIntoView({ behavior: 'smooth' })` hacia IDs de sección.

### Sin Librerías de Animación Externas
Las animaciones se implementan con:
- **CSS `@keyframes`** para animaciones de entrada del hero
- **Intersection Observer API** via `ScrollAnimationDirective` para animaciones de scroll
- **CSS `transition`** para hover effects y cambios de estado

### Signals sobre RxJS
Para estado local simple (booleanos, toggles), se usan Angular Signals en lugar de BehaviorSubject/RxJS. Esto simplifica el código y reduce imports.

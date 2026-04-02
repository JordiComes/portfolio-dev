# Sistema de Diseño

## Paleta de Colores

Inspirada en la estética de Death Stranding: tonos oscuros con acentos cálidos.

### Fondos

| Variable | Valor | Uso |
|---|---|---|
| `$bg-primary` | `#0a0a0a` | Fondo principal del body |
| `$bg-secondary` | `#111111` | Secciones alternadas (About, Contact) |
| `$bg-tertiary` | `#1a1a1a` | Navbar, cards de proyectos |
| `$bg-card` | `#2a2a2a` | Superficies elevadas, pills |
| `$border-subtle` | `#333333` | Bordes finos, divisores |

### Acentos

| Variable | Valor | Uso |
|---|---|---|
| `$accent-gold` | `#c8a84e` | Acento principal: CTAs, links, highlights |
| `$accent-gold-dim` | `#8a7235` | Variante dimmed del gold |
| `$accent-blue` | `#7a8fa6` | Acento secundario: gradiente hero |
| `$accent-blue-dim` | `#4e6174` | Variante dimmed del blue |

### Texto

| Variable | Valor | Uso |
|---|---|---|
| `$text-primary` | `#e8e8e8` | Texto del body |
| `$text-secondary` | `#999999` | Labels, texto muted |
| `$text-heading` | `#f0f0f0` | Headings |

## Tipografía

### Fuentes

- **Headings**: `Space Grotesk` (pesos 500, 700) — moderna, geométrica
- **Body**: `Inter` (pesos 300, 400, 500, 600) — legible, neutral

### Escala Tipográfica

| Variable | Valor | Uso |
|---|---|---|
| `$fs-hero` | `clamp(2.5rem, 6vw, 5rem)` | Nombre en Hero |
| `$fs-h2` | `clamp(1.75rem, 4vw, 2.5rem)` | Títulos de sección |
| `$fs-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | Subtítulos, card titles |
| `$fs-body` | `1rem` | Texto general |
| `$fs-small` | `0.875rem` | Labels, tags, texto secundario |

## Breakpoints

| Variable | Valor | Target |
|---|---|---|
| `$bp-mobile` | `480px` | Teléfonos grandes |
| `$bp-tablet` | `768px` | Tablets |
| `$bp-desktop` | `1024px` | Desktop |
| `$bp-wide` | `1440px` | Pantallas anchas |

### Mixin de Responsive

```scss
@mixin respond($bp) {
  @media (min-width: $bp) {
    @content;
  }
}

// Uso:
@include respond($bp-tablet) {
  // estilos para tablet+
}
```

## Espaciado

| Variable | Valor | Uso |
|---|---|---|
| `$section-padding-y` | `clamp(4rem, 8vw, 8rem)` | Padding vertical de secciones |
| `$content-max-width` | `1200px` | Ancho máximo del contenido |

## Clases de Utilidad

- `.container` — max-width + auto margins + padding responsive
- `.section` — padding vertical estándar
- `.section-title` — heading con línea dorada decorativa debajo
- `.accent-text` — color dorado para destacar texto

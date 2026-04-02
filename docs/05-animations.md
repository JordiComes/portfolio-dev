# Sistema de Animaciones

## ScrollAnimation Directive

**Archivo**: `src/app/directives/scroll-animation.ts`

Directiva standalone reutilizable que anima elementos cuando aparecen en el viewport al hacer scroll.

### Inputs

| Input | Tipo | Default | Descripción |
|---|---|---|---|
| `direction` | `'left' \| 'right' \| 'bottom'` | `'bottom'` | Dirección desde la que entra el elemento |
| `delay` | `number` | `0` | Delay en milisegundos antes de la animación |
| `threshold` | `number` | `0.15` | Porcentaje del elemento visible para activar (0-1) |

### Funcionamiento

1. **Inicialización** (`ngOnInit`): aplica `opacity: 0` y un `transform` según la dirección:
   - `left` → `translateX(-60px)`
   - `right` → `translateX(60px)`
   - `bottom` → `translateY(40px)`
2. **Observación**: crea un `IntersectionObserver` con el threshold configurado
3. **Activación**: cuando el elemento intersecta, transiciona a `opacity: 1` y `transform: translate(0, 0)` con duración de 0.7s ease
4. **Cleanup**: una vez activada la animación, se llama `unobserve()` para que no se repita. El observer se desconecta en `ngOnDestroy`

### Uso en Templates

```html
<!-- Entrada desde la izquierda -->
<div appScrollAnimation direction="left">...</div>

<!-- Entrada desde la derecha con delay -->
<div appScrollAnimation direction="right" [delay]="200">...</div>

<!-- Entrada desde abajo (default) -->
<div appScrollAnimation>...</div>

<!-- Delay escalonado en loops -->
@for (item of items; track item; let i = $index) {
  <div appScrollAnimation [delay]="i * 100">{{ item }}</div>
}
```

## Animaciones CSS (Keyframes)

**Archivo**: `src/styles/_animations.scss`

### `fadeInUp`
Fade in + movimiento hacia arriba. Usado en el Hero para la entrada escalonada del texto.

```scss
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### `pulse`
Pulsación de opacidad. Usado en los gradientes del fondo del Hero.

```scss
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
```

### `pageLoad`
Fade in del body al cargar la página.

```scss
@keyframes pageLoad {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Transiciones CSS

Además de las animaciones por keyframes, se usan `transition` para:

| Elemento | Propiedad | Duración | Trigger |
|---|---|---|---|
| Navbar fondo | `background-color, box-shadow` | 0.3s | Scroll > 50px |
| Nav links | `color` | 0.3s | Hover |
| Project cards | `transform, border-color, box-shadow` | 0.3s | Hover |
| Form inputs | `border-color, box-shadow` | 0.3s | Focus |
| CTA button | `background, transform` | 0.3s | Hover |
| Tech pills | `border-color, color` | 0.3s | Hover |

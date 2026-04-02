# Personalización

## Cambiar Colores

Edita `src/styles/_variables.scss` para modificar toda la paleta:

```scss
$accent-gold: #c8a84e;  // Cambia el acento principal
$bg-primary: #0a0a0a;   // Cambia el fondo principal
```

Todos los componentes importan este archivo, por lo que un cambio aquí se refleja en toda la aplicación.

## Cambiar Tipografía

1. Actualiza el link de Google Fonts en `src/index.html`
2. Modifica las variables en `src/styles/_typography.scss`:
   ```scss
   $font-heading: 'Tu Fuente', sans-serif;
   $font-body: 'Tu Otra Fuente', sans-serif;
   ```

## Modificar Información Personal

### Bio y datos
- **Nombre y rol**: `src/app/components/hero/hero.html`
- **Biografía**: `src/app/components/about/about.html`
- **Tecnologías**: array `technologies` en `src/app/components/about/about.ts`
- **Footer**: `src/app/components/contact/contact.html`
- **Meta tags y título**: `src/index.html`

### Foto de perfil
Reemplaza el placeholder en `about.html`:
```html
<!-- Cambiar esto: -->
<div class="image-placeholder">
  <span class="initials">JCO</span>
</div>

<!-- Por esto: -->
<img src="assets/foto.jpg" alt="Jordi Comes Orrit" class="profile-photo" />
```
Añade la imagen en `public/assets/` y ajusta los estilos en `about.scss`.

## Gestionar Proyectos

Edita el array `projects` en `src/app/components/projects/projects.ts`:

```typescript
projects: Project[] = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    tags: ['Angular', 'Node.js', 'AI'],
  },
  // ...
];
```

Para añadir links externos a los proyectos, amplía la interfaz `Project` con un campo `url` y añade un `<a>` en el template.

## Añadir Backend al Formulario

El formulario actualmente solo muestra un mensaje de éxito sin enviar datos. Para conectarlo a un backend:

1. Inyecta `HttpClient` en `contact.ts`
2. Añade `provideHttpClient()` en `app.config.ts`
3. Modifica `onSubmit()`:
   ```typescript
   onSubmit(): void {
     if (this.form.valid) {
       this.http.post('/api/contact', this.form.value).subscribe({
         next: () => this.submitted.set(true),
         error: (err) => console.error(err),
       });
     }
   }
   ```

## Añadir Nuevas Secciones

1. Genera el componente: `npx ng generate component components/nueva-seccion --standalone --skip-tests`
2. Importa y añade en `app.ts` y `app.html`
3. Añade un link en `navbar.html`
4. Usa `appScrollAnimation` para animaciones de scroll

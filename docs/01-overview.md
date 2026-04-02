# Portfolio - Visión General

## Descripción

Portfolio profesional de **Jordi Comes Orrit**, Full Stack Developer especializado en integraciones con Inteligencia Artificial. Landing page de una sola página con estética oscura inspirada en Death Stranding / Kojima Productions.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| Angular | 21+ | Framework frontend (standalone components) |
| TypeScript | 5.x | Lenguaje principal |
| SCSS | Dart Sass | Preprocesador de estilos |
| Google Fonts | - | Tipografías (Space Grotesk, Inter) |

## Características Principales

- **Single Page Application** sin routing, navegación por anchor scroll
- **Diseño responsive** mobile-first con breakpoints para tablet, desktop y wide
- **Animaciones de scroll** con Intersection Observer API (sin librerías externas)
- **Formulario de contacto** con validación reactiva
- **Paleta Death Stranding**: negros profundos, grises oscuros, acentos dorado y azul-gris
- **Standalone components**: sin NgModules, usando las últimas features de Angular

## Requisitos

- Node.js v20+ (probado con v24.14.1)
- npm v11+

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start
# Accesible en http://localhost:4200

# Build de producción
npm run build
# Output en dist/portfolio/

# Tests
npm test
```

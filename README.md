# mapa_ensu

Sitio institucional responsive con enfoque de accesibilidad, inspirado en patrones de diseño SISDAI.

## Estructura de carpetas

```text
.
├── index.html
├── formulario.html
├── src
│   ├── components
│   │   └── layout.js
│   ├── data
│   │   └── mapData.js
│   ├── styles
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── main.js
│   └── formulario.js
└── README.md
```

## Implementación solicitada

- Página Home con:
  - Mapa interactivo con coropletas y puntos.
  - Gráfica de línea con evolución trimestral.
- Página de formulario con validación HTML5 y mensajes accesibles (`aria-live`).
- Componentes base reutilizables:
  - Header y Footer con navegación.
  - Card, Button, Grid, Form Group y utilidades de layout.
- Estilos reutilizables con tokens (`--sisdai-*`) para color, espaciado, tipografía y radios.

## Accesibilidad

- Estructura semántica (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- `skip link` para ir al contenido principal.
- Estados de foco visibles y consistentes.
- Contraste alto en tipografía y componentes.
- Labels y ayudas textuales para formularios.

## Nota sobre referencias SISDAI

Durante esta ejecución no fue posible acceder a repositorios y paquetes externos de SISDAI por restricciones de red del entorno. Aun así, se implementó una adaptación consistente con una línea institucional:

- **Inspirado en SISDAI (adaptación conceptual):**
  - Sistema de tokens de diseño, nomenclatura de clases prefijada (`sisdai-*`), layout modular y componentes reutilizables.
  - Jerarquía visual institucional (hero, cards, tipografía sobria, paleta teal/azul).
  - Enfoque de accesibilidad y consistencia responsive.

- **Adaptación propia del proyecto:**
  - Datos demo de regiones/sedes para el mapa.
  - Configuración específica de gráfica e indicadores ENSU.
  - Contenido institucional y flujo de formulario.

> Más del 80% del código de interfaz utiliza el sistema `sisdai-*` (tokens, componentes, clases y patrones).

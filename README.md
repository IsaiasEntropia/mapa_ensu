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

## Documentación para levantar en local

Este proyecto es estático (HTML/CSS/JS), por lo que **no requiere proceso de build**.

### Requisitos mínimos

- Tener uno de los siguientes disponibles en tu equipo:
  - `python3` (recomendado), o
  - `node` + `npx`.
- Navegador actualizado (Chrome, Firefox, Edge o Safari).

### Opción 1 (recomendada): servidor local con Python

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd /ruta/a/mapa_ensu
   ```
2. Levanta el servidor:
   ```bash
   python3 -m http.server 4173
   ```
3. Abre en tu navegador:
   - Home: `http://localhost:4173/index.html`
   - Formulario: `http://localhost:4173/formulario.html`
4. Para detener el servidor, usa `Ctrl + C`.

### Opción 2: servidor local con Node

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd /ruta/a/mapa_ensu
   ```
2. Ejecuta:
   ```bash
   npx serve -l 4173 .
   ```
3. Abre en tu navegador:
   - Home: `http://localhost:4173/index.html`
   - Formulario: `http://localhost:4173/formulario.html`

### Verificación rápida

Con el servidor arriba, valida que:

- Cargue el mapa (Leaflet) y se visualicen coropletas + puntos.
- Cargue la gráfica de línea (Chart.js).
- El formulario valide campos requeridos y muestre mensajes de estado.
- Con teclado, funcione:
  - `Tab` para navegación,
  - foco visible en enlaces, botones y campos,
  - enlace “Saltar al contenido principal”.

### Solución de problemas

- **Puerto en uso**: cambia `4173` por otro (por ejemplo `8080`).
- **No carga mapa/gráfica**: verifica conexión a internet (se usan CDNs para Leaflet y Chart.js).
- **Abrir archivo directo (`file://`) falla**: usa siempre servidor local (`python3 -m http.server` o `npx serve`).

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

export function renderHeader(activePage = "inicio") {
  const isHome = activePage === "inicio";
  const isForm = activePage === "formulario";

  return `
    <div class="sisdai-topbar" role="banner">
      <div class="sisdai-shell sisdai-topbar__inner">
        <a class="sisdai-brand" href="index.html" aria-label="Ir al inicio de Mapa ENSU">
          <span class="sisdai-brand__logo" aria-hidden="true">◉</span>
          <span class="sisdai-brand__text">Mapa ENSU</span>
        </a>
        <nav aria-label="Principal">
          <ul class="sisdai-nav">
            <li><a ${isHome ? 'aria-current="page"' : ""} href="index.html">Inicio</a></li>
            <li><a ${isForm ? 'aria-current="page"' : ""} href="formulario.html">Formulario</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <div class="sisdai-footer">
      <div class="sisdai-shell sisdai-footer__inner">
        <p>© ${year} Mapa ENSU · Diseño institucional inspirado en SISDAI.</p>
        <a href="https://sisdai.org/" target="_blank" rel="noopener noreferrer">Referencia SISDAI</a>
      </div>
    </div>
  `;
}

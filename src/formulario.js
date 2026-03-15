import { renderHeader, renderFooter } from "./components/layout.js";

document.getElementById("site-header").innerHTML = renderHeader("formulario");
document.getElementById("site-footer").innerHTML = renderFooter();

const form = document.getElementById("reporte-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = "Hay campos obligatorios sin completar. Revisa el formulario.";
    form.reportValidity();
    return;
  }

  status.textContent = "Solicitud enviada correctamente. En breve recibirás confirmación por correo.";
  form.reset();
});

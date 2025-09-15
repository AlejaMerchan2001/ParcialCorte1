// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const form = document.getElementById('form');
// agarro el elemento por id
  const nombre = document.getElementById('nombre');
// agarro el elemento por id
  const estado = document.getElementById('estado');
  form.addEventListener('submit', (e) => {
// evito que se mande el formulario
    e.preventDefault();
    if (nombre.value.trim().length >= 2) {
      estado.textContent = 'Formulario válido. (Submit prevenido)';
    } else {
      estado.textContent = 'Nombre muy corto.';
    }
  });
});
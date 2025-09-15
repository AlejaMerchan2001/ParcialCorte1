// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const cont = document.getElementById('contenedor');
  cont.innerHTML = '<p>Nuevo <strong>contenido</strong> con <em>HTML</em>.</p>';
});
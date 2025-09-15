// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const p = document.getElementById('borrar');
// elimino el elemento
  p.remove();
  document.getElementById('estado').textContent = 'Elemento con id="borrar" eliminado.';
});
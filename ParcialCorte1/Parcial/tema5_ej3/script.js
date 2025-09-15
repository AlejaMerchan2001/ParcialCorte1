// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const ul = document.getElementById('lista');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  document.getElementById('estado').textContent = 'Se eliminaron todos los hijos de #lista.';
});
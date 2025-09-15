// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  lista.innerHTML += '<li>Nuevo 1</li><li>Nuevo 2</li><li>Nuevo 3</li>';
});
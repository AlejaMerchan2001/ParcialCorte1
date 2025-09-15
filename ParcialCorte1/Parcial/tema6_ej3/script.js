// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const div = document.getElementById('hover');
// cuando paso el mouse encima
  div.addEventListener('mouseover', () => { div.style.background = 'yellow'; });
// cuando saco el mouse
  div.addEventListener('mouseout', () => { div.style.background = '#eee'; });
});
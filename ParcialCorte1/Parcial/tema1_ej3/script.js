// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// uso querySelector para traer el primero que encuentre
  const p = document.querySelector('p');
  p.style.border = '2px solid red';
  p.style.padding = '6px';
  p.style.borderRadius = '8px';
});
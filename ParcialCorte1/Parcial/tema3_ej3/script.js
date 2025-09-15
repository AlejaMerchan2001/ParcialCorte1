// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// uso querySelector para traer el primero que encuentre
// traigo todos los que cumplen el selector
  const elementos = document.querySelectorAll('.item');
// le quito la clase css
  elementos.forEach(el => el.classList.remove('activo'));
});
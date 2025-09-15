// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// uso querySelector para traer el primero que encuentre
  const img = document.querySelector('.foto');
// cambio o agrego un atributo
  img.setAttribute('data-info', 'avatar');
});
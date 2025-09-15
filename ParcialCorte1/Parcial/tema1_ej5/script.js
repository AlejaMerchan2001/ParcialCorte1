// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// uso querySelector para traer el primero que encuentre
// traigo todos los que cumplen el selector
  const botones = document.querySelectorAll('button.accion');
  botones.forEach(b => b.disabled = true);
});
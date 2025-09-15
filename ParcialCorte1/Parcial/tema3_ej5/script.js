// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const p = document.getElementById('edad');
  const edad = 20;
  if (edad >= 18) {
// le sumo una clase css
    p.classList.add('rojo');
  }
});
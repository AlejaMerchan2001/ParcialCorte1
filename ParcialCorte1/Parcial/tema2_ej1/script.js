// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const titulo = document.getElementById('titulo');
  titulo.textContent = 'Nuevo Título';
});
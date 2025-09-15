// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// uso querySelector para traer el primero que encuentre
// traigo todos los que cumplen el selector
  const porBorrar = document.querySelectorAll('.borrar');
// elimino el elemento
  porBorrar.forEach(el => el.remove());
  document.getElementById('estado').textContent = 'Se eliminaron los elementos con clase .borrar';
});
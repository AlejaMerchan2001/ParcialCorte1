// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const origen = document.getElementById('origen');
  const clon = origen.cloneNode(true);
  clon.textContent = 'Clon modificado';
// lo agrego al contenedor
  document.getElementById('zona').appendChild(clon);
  // Eliminar luego de 500 ms para ver el cambio
  setTimeout(() => {
// elimino el elemento
    clon.remove();
    document.getElementById('estado').textContent = 'Clon eliminado.';
  }, 500);
});
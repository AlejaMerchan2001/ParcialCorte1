// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const original = document.getElementById('original');
  const clon = original.cloneNode(true);
  clon.textContent = 'Clonado';
// lo agrego al contenedor
  document.getElementById('destino').appendChild(clon);
});
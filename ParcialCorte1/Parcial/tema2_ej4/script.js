// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const area = document.getElementById('area');
  area.innerHTML = '';
// creo un elemento nuevo desde js
  const p = document.createElement('p');
  p.textContent = 'Contenido nuevo después de limpiar';
// lo agrego al contenedor
  area.appendChild(p);
});
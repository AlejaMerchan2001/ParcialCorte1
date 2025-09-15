// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// creo un elemento nuevo desde js
  const p = document.createElement('p');
  p.textContent = 'Párrafo agregado dinámicamente';
// lo agrego al contenedor
  document.getElementById('contenedor').appendChild(p);
});
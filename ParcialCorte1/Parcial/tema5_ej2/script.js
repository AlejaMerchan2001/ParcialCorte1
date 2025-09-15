// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// creo un elemento nuevo desde js
  const nuevo = document.createElement('span');
  nuevo.textContent = 'Nuevo';
  nuevo.className = 'item';
// agarro el elemento por id
  const viejo = document.getElementById('viejo');
// reemplazo el viejo por el nuevo
  viejo.parentNode.replaceChild(nuevo, viejo);
});
// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
  const items = document.getElementsByTagName('li');
  document.getElementById('resultado').textContent = 'Cantidad: ' + items.length;
});
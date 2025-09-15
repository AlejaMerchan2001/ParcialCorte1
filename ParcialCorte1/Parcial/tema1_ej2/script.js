// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.getElementsByClassName('a-ocultar');
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
});
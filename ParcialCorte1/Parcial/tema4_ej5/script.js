// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// creo un elemento nuevo desde js
  const box = document.createElement('div');
  box.textContent = 'Caja estilizada';
  box.className = 'caja';
// cambio o agrego un atributo
  box.setAttribute('data-info', 'caja-demo');
  box.style.background = '#222';
  box.style.color = 'white';
// lo agrego al contenedor
  document.getElementById('wrap').appendChild(box);
});
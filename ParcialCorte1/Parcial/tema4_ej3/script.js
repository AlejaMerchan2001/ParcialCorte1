// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// creo un elemento nuevo desde js
  const btn = document.createElement('button');
  btn.textContent = 'Soy dinámico';
  btn.className = 'btn';
// lo agrego al contenedor
  document.getElementById('zona').appendChild(btn);
  // (Evento simple para feedback)
// cuando hago click pasa esto
  btn.addEventListener('click', () => {
    document.getElementById('resultado').textContent = '¡Clic detectado!';
  });
});
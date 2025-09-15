// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const btn = document.getElementById('btn');
// agarro el elemento por id
  const txt = document.getElementById('txt');
// cuando hago click pasa esto
  btn.addEventListener('click', () => {
    txt.textContent = 'Texto cambiado por click';
  });
});
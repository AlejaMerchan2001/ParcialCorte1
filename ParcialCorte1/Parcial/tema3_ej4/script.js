// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const a = document.getElementById('enlace');
// agarro el elemento por id
  const info = document.getElementById('info');
  if (a.hasAttribute('target')) {
// cambio o agrego un atributo
    a.setAttribute('target', '_self');
    info.textContent = 'El enlace tenía target, se cambió a _self.';
  } else {
    info.textContent = 'El enlace no tenía target.';
  }
});
// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const inp = document.getElementById('inp');
// agarro el elemento por id
  const out = document.getElementById('salida');
  inp.value = 'Hola DOM';
  out.textContent = 'Salida: ' + inp.value;
});
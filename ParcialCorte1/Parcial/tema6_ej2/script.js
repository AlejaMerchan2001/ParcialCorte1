// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const inp = document.getElementById('inp');
// cada vez que escribo en el input
  inp.addEventListener('input', (e) => {
// lo muestro en la consola
    console.log('Valor actual:', e.target.value);
  });
});
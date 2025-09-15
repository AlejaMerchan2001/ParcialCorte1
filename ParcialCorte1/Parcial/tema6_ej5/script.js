// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// agarro el elemento por id
  const btn = document.getElementById('agregar');
// agarro el elemento por id
  const lista = document.getElementById('lista');
  let contador = 0;
// cuando hago click pasa esto
  btn.addEventListener('click', () => {
    contador++;
// creo un elemento nuevo desde js
    const li = document.createElement('li');
    li.textContent = 'Item ' + contador;
// lo agrego al contenedor
    lista.appendChild(li);
  });
  // Delegación: escuchar en el padre
// cuando hago click pasa esto
  lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
// elimino el elemento
      e.target.remove();
    }
  });
});
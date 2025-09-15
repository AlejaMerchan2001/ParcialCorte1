// espero a que cargue todo el html antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
// creo un elemento nuevo desde js
  const ul = document.createElement('ul');
  for (let i = 1; i <= 3; i++) {
// creo un elemento nuevo desde js
    const li = document.createElement('li');
    li.textContent = 'Item ' + i;
// lo agrego al contenedor
    ul.appendChild(li);
  }
// lo agrego al contenedor
  document.body.appendChild(ul);
});
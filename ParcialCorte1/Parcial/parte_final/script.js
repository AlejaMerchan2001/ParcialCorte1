// Selecciona elementos por ID
// agarro el elemento por id
const titulo = document.getElementById('titulo');
// agarro el elemento por id
const input = document.getElementById('nuevoItem');
// agarro el elemento por id
const boton = document.getElementById('agregar');
// agarro el elemento por id
const lista = document.getElementById('lista');

// Agrega evento al botón
// cuando hago click pasa esto
boton.addEventListener('click', () => {
  const texto = input.value;
  if (texto) {
    // Crea nuevo elemento li
// creo un elemento nuevo desde js
    const li = document.createElement('li');
    li.textContent = texto;
    // Agrega clase
// le sumo una clase css
    li.classList.add('item');
    // Añade a la lista
// lo agrego al contenedor
    lista.appendChild(li);
    // Limpia input
    input.value = '';
    // Agrega evento para eliminar (interactividad)
// cuando hago click pasa esto
    li.addEventListener('click', () => {
// elimino el elemento
      li.remove();
    });
    // Modifica estilo dinámico
// le sumo una clase css
    li.classList.add('rojo');
  }
});

// Ejemplo de modificación inicial: cambia título
titulo.textContent = 'Lista Interactiva';
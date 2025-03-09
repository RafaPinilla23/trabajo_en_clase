/* Desarrollar un código en javascript que permita jugar al ahorcado. 
El usuario debe adivinar una palabra de 5 letras.
El usuario tiene 6 oportunidades para adivinar la palabra.
Si el usuario adivina la palabra, se muestra un mensaje de felicitaciones.
Si el usuario se queda sin oportunidades, se muestra un mensaje de derrota.
El usuario puede jugar de nuevo.
*/

const inputTarea = document.getElementById("inputTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();
    if (tareaTexto === "") return;
        
    const tareaItem = document.createElement("li");
    tareaItem.textContent = tareaTexto;
    tareaItem.classList.add("noCompletada");
        
    tareaItem.addEventListener("click", function () {
    tareaItem.classList.toggle("completada");
    tareaItem.classList.toggle("noCompletada");
    });
        
    listaTareas.appendChild(tareaItem);
    inputTarea.value = "";
}

function mostrarTareas() {
    listaTareas.innerHTML = "";
}

btnAgregarTarea.addEventListener("click", agregarTarea);
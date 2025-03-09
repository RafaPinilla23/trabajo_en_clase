/* Ejercicio una función que permite mostrar el reloj
en el elemento HTML con id="reloj" al presionar el botón con id="mostrar" */
function reloj() {
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();

    document.getElementById("reloj").innerText=""+hr+":"+min+":"+sec;
    console.log(fecha);
    
    setTimeout("reloj()", 1000);
}

// Agregar el evento click al botón
document.getElementById("mostrar").addEventListener("click", reloj);
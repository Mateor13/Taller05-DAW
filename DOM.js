//Mateo Torres

//Crear un boton para cambiar el color del fondo de la pagina
var botonColor = document.createElement("button");
botonColor.innerHTML = "Cambiar color de fondo";
document.body.appendChild(botonColor);

//Crear un boton para cambiar el color del texto de la pagina
var botonTexto = document.createElement("button");
botonTexto.innerHTML = "Cambiar color de texto";
document.body.appendChild(botonTexto);

//Función para generar un color aleatorio
function colorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Función para cambiar el color de fondo
botonColor.addEventListener("click", function () {
    document.body.style.backgroundColor = colorAleatorio();
});

//Función para cambiar el color del texto
botonTexto.addEventListener("click", function () {
    document.body.style.color = colorAleatorio();
});
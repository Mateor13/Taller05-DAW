// Fundamentos
"use strict";
function solicitar(tipo) {

    for (let i = 0; i < 2000000; i++) {
    }
    {return `Solicitando ${tipo}...`}
}

console.log(`Inicio de la solicitud`);
console.log(`Solicitud en proceso...`);
console.log(`Esto puede tardar un poco...`);
const holamundo = solicitar("hola mundo"); 
console.log(holamundo);
console.log("Fin de la solicitud");

// Promesas
"use strict";
const conexion = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve(`Conexión exitosa: ${datosConexion}`) : reject(`Error de conexión`);
    }, 3000)
    })
}
const obtenerProductos = fetch('https://fakestoreapi.com/products/1')

conexion(true)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

obtenerProductos
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Async - Await
"use strict";
const conexion2 = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve(`Conexión exitosa: ${datosConexion}`) : reject(`Error de conexión`);
    }, 3000)
    })
}
const obtenerProductos2 = fetch('https://fakestoreapi.com/products/1')

async function conexion() {
    try {
        console.log(await conexion2(true));
    }
    catch (error) {
        console.log(error);
    }
}

async function obtener() {
    try {
        const respuesta = await obtenerProductos2;
        const data = await respuesta.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
conexion();
obtener();
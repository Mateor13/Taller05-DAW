//API utilizada para prueba> https://fakestoreapi.com/products
//La cual simula una tienda
//Guardar un objeto en localStorage
"use strict";
fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then(data => {
        {
            let product = {
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image
        }
            localStorage(product)
        }

    })

const guardarLocalStorage = (data) => {
    localStorage.setItem('product', JSON.stringify(data))
}

"use strict";
const llamarLocalStorage = () => {
    const response = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : "No se encuentran resultados"
    console.log(response)
}
llamarLocalStorage()
"use strict";
const eliminarLocalStorage = () => {
    !localStorage.key('product') ? console.log("No hay productos en el carrito") : localStorage.removeItem('product')
}
eliminarLocalStorage()

if (!localStorage.getItem('product')) {
    console.log(`La clave ${product} se eliminó correctamente`)
} else {
    console.log("La clave no se eliminó correctamente")
}

// Modulos
//CommonJS
const caracteristicas = require('./module.js');
caracteristicas(1, 500);
//ES Modules
import { descuento } from './module.js';
descuento(100, 0.2);
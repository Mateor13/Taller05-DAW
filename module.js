/*CommonJS
const express = require('express');

const caracteristicas = (id, stock) => {
    if (stock < 0) {
        return console.log(`El producto con el id ${id} no tiene stock`);
    }
    console.log(`Procesando producto con id ${id}...`);
};

// Exportar caracteristicas y descuento usando CommonJS
const descuento = (precioNormal, porcentajeOferta) => {
    const operacion = precioNormal * porcentajeOferta;
    const descuento = precioNormal - operacion;
    console.log(`El precio con descuento es de ${descuento}`);
};

module.exports = {
    caracteristicas,
    descuento
};
*/ 
//ES Modules 
import express from 'express';

const caracteristicas = (id, stock) => {
    if (stock < 0) {
        return console.log(`El producto con el id ${id} no tiene stock`);
    }
    console.log(`Procesando producto con id ${id}...`);
};

// Exportar caracteristicas y descuento usando ES Modules
export { caracteristicas };

export const descuento = (precioNormal, porcentajeOferta) => {
    const operacion = precioNormal * porcentajeOferta;
    const descuento = precioNormal - operacion;
    console.log(`El precio con descuento es de ${descuento}`);
};
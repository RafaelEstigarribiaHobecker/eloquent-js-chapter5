/*Utiliza el método reduce en combinación con el método concat para “aplanar”
un array de arrays en un único array que contenga todos los elementos de los arrays originales*/


let array = [[2], [3, 7, 6], [4, 9], [5]];

// Usamos la palabra 'function' en vez de la letra =>
let aplanadoArray = array.reduce(function (acumulador, arrayActual) {
    // El cuerpo de la funcion se mantiene igual
    return acumulador.concat(arrayActual);
}, []); // Empezamos con la caja vacia


console.log(aplanadoArray);
//Resultado en consola: [2,3,7,6,4,9,5]

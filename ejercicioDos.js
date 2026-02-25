// Tu Propio Bucle

// 1. Construimos nuestro modulo produndo

function loop(valorInicial, funcionPrueba, funcionActualizacion, funcionCuerpo) {
    // Usamos el 'for' nativo, pero inyectamos las reglas que recibimos

    for (let actual = valorInicial; funcionPrueba(actual); actual = funcionActualizacion(actual)) {

        // En cada vuelta, ejecutamos el cuerpo pasandole el valor actual
        funcionCuerpo(actual);


    }
}

console.log("Iniciando la prueba de nuestro bucle personalizado:");

loop(
    3,
    function (n) {
        return n > 0;
    },
    function (n) {
        return n - 1;
    },
    function (n) {
        console.log(n);
    }
);


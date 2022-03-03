/**
 * 
 * Muestra los números pares del siguiente array
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 */

let listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;
for (var i=0; i < listaNumeros.length; i += 1){
    if (i % 2 == 0) {
        console.log(i);
    };
    total += listaNumeros[i];
};

console.log("El resultado es: " + total);

// Dado el mismo array, sumar todos los números


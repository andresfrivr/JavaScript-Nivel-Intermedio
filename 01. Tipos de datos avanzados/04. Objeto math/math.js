/*

var pi = Math.PI;

console.log(pi);

console.log(Math.min(1,2,3,4,5,6,7,8,9,0,0.12344567, -10));
console.log(Math.max(1,2,3,345,5,6,7,8,9,0,0.12344567, -10));
console.log(Math.round(4.5));
console.log(Math.round(4.4));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.8));

var aleatorio = Math.random();

console.log(aleatorio);
*/

function generarNumero(numeroMaximo){
    return Math.round(Math.random() * numeroMaximo);
}


console.log(generarNumero(100));
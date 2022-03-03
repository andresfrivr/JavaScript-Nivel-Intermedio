var date = new Date();

// Nos dice que es una función
// console.log(Date);
//Usando la variable global
// console.log(date);
//Usando nuestro objeto new Date
// console.log(Date());

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
console.log("Hola, hoy es " + day + " del mes " + month + " del año " + year);

// Ojo, en el sistema los meses van del 0 al 11 en vez del 1 al 12
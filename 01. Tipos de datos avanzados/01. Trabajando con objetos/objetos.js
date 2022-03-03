var persona = {
    nombre: 'Andres',
    edad: 27,
    saludar: function(){
        // Para poder acceder a un atributo dentro de una función. Con this
        // console.log(this.nombre);
        // console.log('Hola');
        console.log("Hola " + this.nombre)
    }
};

// console.log(persona);

// console.log(persona.nombre);

// console.log(persona.saludar());

persona.saludar();
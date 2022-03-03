/**
 * Imaginemos que vamos a desarrollar un juego, 
 * y debemos crear un objeto "Jugador" que tenga una propiedad "fuerza" 
 * que inicialmente tenga el valor 1, un método "incrementarFuerza" que 
 * nos permita incrementar en 1 la fuerza del jugador y un método
 * "consultarFuerza" que nos muestre un mensaje con la fuerza del jugador.
 */

var jugador = {
    fuerza: 1,
    incrementarFuerza: function(){
        this.fuerza += 1;
        // this.fuerza = this.fuerza+1;
    },
    consultarFuerza: function(){
        console.log("Tu fuerza es de: " + this.fuerza)
    }
};

jugador.consultarFuerza();
jugador.incrementarFuerza();
jugador.consultarFuerza();
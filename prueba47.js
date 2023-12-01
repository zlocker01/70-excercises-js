/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 47:
Crea un simulador de pieda, papel o tijera.
 
El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate"
 
Ejemplos:
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/

function quienGana(partidas){
    //contadores de victorias de los jugadores
    let contadorJugador1 = 0;
    let contadorJugador2 = 0;

    //iterando las partidas
    for(const partida of partidas){
        //jugada de cada jugador
        const jugada1 = partida[0];
        const jugada2 = partida[1];

        //comporbar resultadod de partidas
        //empate
        if(jugada1 === jugada2){
            continue;
        };

        if(jugada1.includes('PIEDRA') && jugada2.includes('TIJERA') ||
        jugada1.includes('PAPEL' && jugada2.includes('PIEDRA')) ||
        jugada1.includes('TIJERA') && jugada2.includes('PAPEL')){
            contadorJugador1++;
        } else {
            contadorJugador2++;
        };
    };
    //mostrar ganador
    if (contadorJugador1 > contadorJugador2) {
        return 'Gana Jugador 1';
    } else if (contadorJugador1 < contadorJugador2) {
        return 'Gana Jugador 2';
    } else {
        return 'Empate';
    };    
};

console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]));
console.log(quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]));
console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]));
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 62:
Dado un diccionario de letras disponibles:
[
   ['A','B','C','D'],
   ['S','V','C','S'],
   ['A','D','O','E']
 ]
 
 Crea una función que me diga si la palabra que le paso
 como parametro se puede formar con las letras del
 diccionario disponibles.
 
¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.
 
Ejemplos:
puedeFormarPalabra('BESO', diccionario)   // true
puedeFormarPalabra('SOSO', diccionario)   // false   
 
*/

function puedeFormarPalabra(palabra) {
    let diccionario = [
        ['A', 'B', 'C', 'D'],
        ['S', 'V', 'C', 'S'],
        ['A', 'D', 'O', 'E']
    ];

    // Crear una copia de todasLasLetras para no modificar la original
    let todasLasLetras = diccionario.flat().slice();

    // Iterar las letras de la palabra
    for (let letra of palabra) {
        // Verificar si la letra está en todasLasLetras
        if (todasLasLetras.includes(letra)) {
            // Eliminar la letra de la copia
            todasLasLetras.splice(todasLasLetras.indexOf(letra), 1);
        } else {
            // Si la letra no está en todasLasLetras, no se puede formar la palabra
            return false;
        };
    };

    // Si ha pasado por todas las letras de la palabra, se puede formar la palabra
    return true;
};

console.log(puedeFormarPalabra('BESOS')); // true
console.log(puedeFormarPalabra('SOSO')); // false
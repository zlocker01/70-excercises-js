/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola
*/

function invertirPalabras(frase){
    const palabras = frase.split(' ');

    // let fraseInvertida = palabras.reverse(); //esta seria la solucion con funciones nativas

    let fraseInvertida = '';

    for(let contador = palabras.length - 1; contador >= 0; contador--){
        fraseInvertida += `${palabras[contador]} `;
    };

    return fraseInvertida;
};


console.log(invertirPalabras("Hola soy Victor Robles"));
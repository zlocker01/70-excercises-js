/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
*/


/* function ejemploesPalindromo(palabra){
    let palabraInvertida = palabra.split('').reverse().join('');

    return (palabraInvertida === palabra);
};

console.log(ejemploesPalindromo('anna'));; */

function esPalindromo(palabra){
    //dividir cadena de un array en letras
    let letras = [];

    for(let i = 0; i < palabra.length; i++){
        letras.push(palabra[i]);
    };

    //invertir la palabra
    
    let letrasInvertidas = [];
    
    for(let i = letras.length - 1; i >= 0; i--){
        letrasInvertidas.push(letras[i]);
    };

    //unir el array en un string
    let palabraInvertida = '';
    for(let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];
    };

    //devovler resultado
    return (palabraInvertida === palabra) ;
};

console.log(esPalindromo('Ana'));


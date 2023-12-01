/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 44:
Crea una función que detecte si un string es un pangrama o no.
 
Un pangrama es una frase que incluye todas las letras del abecedario.
 
Ejemplos:
esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol.") // true
esPangrama("Hola soy Víctor Robles") // false
*/


function esPangrama(frase){
    frase = frase.toLowerCase().replace(/\s/g, '');

    const abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split('');

    return abecedario.every(letra => abecedario.includes(letra));
};

console.log(esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol."));
console.log(esPangrama("Hola soy Víctor Robles"));
/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 .
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
*/

function permutacion(numeros){
    //ordenar el array de numeros
    numeros.sort((menor, mayor) => menor - mayor);
    //iterar el array y comprobar si el elemento es = al sigueinte numero +1
    for(let i = 0; i < numeros.length; i++){
        let numeroFaltante = i + 1;
        if(numeros[i] !== numeroFaltante){
            permutacion.push(numeroFaltante);
        };
    };
    //devovler el numero mas grande
};

console.log(permutacion [2, 4, 1, 3, 5]);


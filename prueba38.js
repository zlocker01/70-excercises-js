/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function aBinario(numero){
    let resultado = '';

    while(numero > 0){
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2); //redondea el numero
    };

    return parseInt(resultado);
};

console.log(aBinario(10));
console.log(aBinario(76));
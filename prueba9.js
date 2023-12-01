/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8 
*/

function sumar(numeros){

    //var para la suma
    let suma = 0;

    //identificar los numeros pares al iterar el array
    numeros.forEach( numero => {
        if(numero % 2 === 0){

            //sumar numeros pares
            suma += numero;
        };

    });

    return suma;

};


// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = sumar(numeros);
console.log(resultado);

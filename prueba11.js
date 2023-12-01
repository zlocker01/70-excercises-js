/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
*/


function sumarDos(numeros, resultado){

    //recorrer array
    for(let i = 0; i < numeros.length; i++){

        //calcular para sacar el segundo numero
        let priemrNumero = numeros[i];
        let segundoNumero = resultado - numeros[i];
        console.log(segundoNumero);

        //comprobar si existe un segundo numero que sumado al actual me de el numero que busco y que no sea repetido
        if(numeros.includes(segundoNumero) && segundoNumero !== priemrNumero){
            return [priemrNumero, segundoNumero];
        };
    };
};

console.log(sumarDos([4, 5, 9, 1], 10));

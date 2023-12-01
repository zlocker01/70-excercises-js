/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

function todosPares(numeros){
    // return numeros.every(numero => numero % 2 == 0); forma facil con una linea method every

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            return true;
        } else {
            return false;
        };
    };
};

console.log(todosPares([2, 6, 8, 12]));
console.log(todosPares([1, 2, 3, 4]));

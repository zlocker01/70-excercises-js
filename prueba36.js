/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]

*/


function encontrarParejasConSuma(numeros, suma){
    //array de numeros valido y con minimo dos nuemeros dentro
    if(!Array.isArray(numeros) || numeros < 2){
        return false;
    };

    //crear array para de parejas de numeros
    let parejas = [];

    //iterar el array
    for(const numeroActual of numeros){
        //iterar de nuevo apartir del umeroActual que recorro
        for(const otroNumero of numeros.slice(numeros.indexOf(numeroActual) + 1)){
            //comporbar la suma
            if(numeroActual + otroNumero === suma){
                parejas.push([numeroActual, otroNumero]);
            };
        };
    };

    return parejas;
};

console.log(encontrarParejasConSuma([1, 2, 3, 4], 7));
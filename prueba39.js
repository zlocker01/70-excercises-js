/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
*/

function combinacionesParentesis(numero){
    //definir variable para resultado
    let resultados = [];

    //comprobar si el numero es valido
    if(numero < 1) {
        return resultados;
    };

    //function recursiva para generar ()
    generarParentesis('', numero, numero, resultados);

    //resultados
    return resultados;
};


//contador de ejcuciones
let contadorEjecuciones = 0;


//funcion que se llama a si immsa varias veces (recursiva)
function generarParentesis(combinacion, abiertos, cerrados, resultados){

    //si nos quedan mas () añadir combinacion a resultados
    if(abiertos === 0 && cerrados === 0){
        resultados.push(combinacion);
        return true;
    };


    if(abiertos > 0){
        generarParentesis(combinacion + '(', abiertos - 1, cerrados, resultados);

        //si todavia hay ) disponibles y hay al menos 1 ( disponible seguimos recursando
        if(cerrados > 0 && abiertos < cerrados){
            generarParentesis(`${combinacion} ')' ${abiertos} (${cerrados} - 1), ${resultados}`);
        };

        //actualizar el contador
        contadorEjecuciones++;
    };

};


console.log(combinacionesParentesis(3));
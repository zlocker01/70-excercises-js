/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/


function contarElementos(texto){
    const palabras = texto.split(' ');

    let mapeo = {};

    palabras.forEach(palabra => {
        //eliminar guiones con replace y expresion regular
        palabra = palabra.replace(/[- _ . ; ,]/g,'');

        if(mapeo[palabra]){
            mapeo[palabra]++; 
        } else {
            mapeo[palabra] = 1;
        };

    });

    return mapeo;
    
};

console.log(contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"));
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
*/


function invertirTexto(texto){
    let palabraInvertida = '';

    //recorrer la cadena de forma inversa
    for(let i = texto.length -1 ; i >= 0; i--){
        palabraInvertida += texto[i];
    };

    return palabraInvertida;
};

console.log(invertirTexto("Hola"));
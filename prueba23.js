/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA

*/


function decodificarMensaje(numeros){
    let mensaje = '';

    numeros.forEach(numero => {
        const letra = String.fromCharCode(parseInt(numero) + 64);

        mensaje += letra;
    });


    return mensaje;
};

console.log(decodificarMensaje([8, 15, 12, 1]));




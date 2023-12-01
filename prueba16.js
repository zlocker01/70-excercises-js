/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
*/



function mostrarTextoCaja(frase){
    //separar la frase en palabras y sbaer su numero de caracteres
    const palabras = frase.split(' ');

    let longitudMaxima = 0;

    palabras.forEach(palabra => {
        longitudMaxima = Math.max(longitudMaxima, palabra.length);
    });

    //imprimir marco
    const espaciosPorDefecto = 4;
    const asteriscosTotales = longitudMaxima + espaciosPorDefecto; 
    console.log('*'.repeat(asteriscosTotales));
    
    //iterar palabras y mostrarlas
    palabras.forEach(palabra => {
        const espacios = ' '.repeat(longitudMaxima - palabra.length);
        console.log(`* ${palabra}${espacios} *`);});
    
    //ultimos asteriscos
    console.log('*'.repeat(asteriscosTotales));
    return frase;
};


mostrarTextoCaja('Hola soy Diego Beristain Desarrollador WEB');

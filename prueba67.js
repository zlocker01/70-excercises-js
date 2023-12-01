/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/

function longitudUltimaPalabra(frase){
    let palabras = [];

    const fraseDividida = frase.split(' ');
    
    for(let palabra of fraseDividida){
        if(palabra.includes('a') && palabra.length >= 4){
            palabras.push(palabra);
        };
    };

    return palabras[palabras.length - 1].length;
};

console.log(longitudUltimaPalabra('El cielo está encapotado quién lo desencapotará hoy'));
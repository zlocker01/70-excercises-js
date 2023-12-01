/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/ 


function contarPalabras(frase){

    // array con las palabras del texto en minusculas y eliminar signos de acentuacion si existen con una expresion regular
const palabras = frase.toLowerCase().replace(/[^\w\s]/gi, '').split('');

    //crear objeto vacio para almacenar las palabras
    let contadorPalaras =  {};

    //integrar el array y contar palabras
    palabras.forEach(palabra => {
        if(palabra in contadorPalaras){
            contadorPalaras[palabra]++;
        } else {
            contadorPalaras[palabra] = 1;
        };

    });

    //devovler palabras contadas
    return contadorPalaras;

};


const resultado = contarPalabras("El perro de san roque no tiene el rabo porque es un perro muy muy malo");
console.log(resultado);
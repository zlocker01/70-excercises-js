/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/

function esArmstrong(numero){
    //convertir numero a string
    numero = numero.toString();

    //calcualr length de string
    const size = numero.length;

    //crear var para acumular cifra y su elevacion al tamaño
    let suma = 0;

    //iterar cada caracter de string
    for(let i = 0; i < size; i++){
        suma += Math.pow(parseInt(numero[i]), size);
    };

    //actualizar var

    //devovler resultado
    return parseInt(numero) === suma;
};

console.log(esArmstrong(153));
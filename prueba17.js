/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
Devuelve: 12
*/

function contarPalabras(frases){
    //variable para le total de palabras de cada frase
    let totalPalabras = 0;

    //iterar con un loop y dividir frase por palabras
    frases.forEach(fraseActual => {
        const palabras = fraseActual.split(' ');
        const numeroDePalabras = palabras.length;
        
        //sumar total de palabras a la var acomuladora
        totalPalabras += numeroDePalabras;  
        console.log(totalPalabras);
    });



    //devovler total palabras
    return frases;
};

contarPalabras([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]);
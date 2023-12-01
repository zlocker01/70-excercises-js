/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
*/

function capitalizarFrase(frase){
    //crrar var para resultado
    let capitalizado = '';

    //saber si una frase es independiente de la otra
    let nuevaFrase = true;

    //iterar la frase
    for(let i = 0; i < frase.length; i++){
        //si hay una nueva frase y si esta no es un espacio añadir letra capital 
        if(nuevaFrase){

            if(frase[i] !== ' '){
                capitalizado += frase[i].toUpperCase();
                nuevaFrase = false;
            } else {
                capitalizado += frase[i];
            };

        } else {
            capitalizado += frase[i];
        };

        //si es un . tomar la frase como nueva para hacerle el capitalizado
        if(frase[i] === '.'){
            nuevaFrase = true;
        };
    };

    return capitalizado;
};

console.log(capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar."));
/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 64:
Crea un programa que compruebe si los paréntesis, llaves y corchetes 
de una expresión están equilibrados, es decir, que estos delimitadores 
se abren y cieran de forma adecuada.
 
Ejemplos:
expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/


function expresionEquilibrada(expresion){
    //crear una pila apra guardar los singos de apertura
    const pila = [];

    //objeto para guardar los pares validos
    const pares = {
        '{': '}',
        '[': ']',
        '(': ')'
    };


    //iterar caracteres
    for(const caracter of expresion){

        //si es caracter abierto lo agrego a la pila
        if(caracter in pares){
            pila.push(caracter);

        //comprobar equivalencia de caracteres de apetura y cierre
        } else if (Object.values(pares).includes(caracter)){

            //eliminar el ultimo elemento y comprobar is el valor de cierre es correcto
            if(pares[pila.pop()] !== caracter) return false;
        };

        };
        return pila.length === 0;
    };

console.log(expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }'));
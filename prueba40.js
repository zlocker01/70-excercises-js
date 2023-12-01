/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
 
*/

function romanoAEntero(romano){
    const tablaRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // Variable para almacenar el resultado
    let resultado = 0;

    for(let i = 0; i < romano.length; i++) {
        const valorActual = tablaRomanos[romano[i]];
        const valorSiguiente = tablaRomanos[romano[i + 1]];

        if (valorSiguiente && valorActual < valorSiguiente) {
            resultado -= valorActual;
        } else {
            resultado += valorActual;
        }
    }

    return resultado;
}

console.log(romanoAEntero("XIVII"));
console.log(romanoAEntero("CXX"));   

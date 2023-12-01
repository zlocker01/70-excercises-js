/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 50:
Crea una función que dada una temperatura la pase a grados
celsius o grados fahrenheit.
 
Ejemplos:
convertirTemperatura('29°C')  // Devuelve: "84.20°F"
convertirTemperatura('77°F')  // Devuelve: "25.00°C"
*/

function convertirTemperatura(temperatura){
    //separar la temepratura del formato
    const tipo = temperatura.slice(-1);
    const valor = parseFloat(temperatura.slice(0, -2));
    
    //coprobar el formato de la temepratura
    if(tipo !== 'C' && tipo !== 'F') return 'Formato Incorrecto';

    if(isNaN(valor)) return 'Formato Incorrecto';

    //hacer las operaciones correspondientes
    if(tipo === 'C'){
        const gradosF = (valor * 9 / 5 + 32).toFixed(2);
        return `${gradosF} °F`;
    } else {
        const gradosC = ((valor - 32) * 5 / 9).toFixed(2);
        return `${gradosC} °C`;
    };
};

console.log(convertirTemperatura('29°C'));
console.log(convertirTemperatura('77°F'));
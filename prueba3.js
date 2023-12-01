/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas

Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
*/
// ``
// const fecha1 = 'Dec 1, 2023';
// const fecha2 = 'Dec 24, 2023';

// function calcularDiferencia (fecha1, fecha2){

//     const fechaInicio = new Date(fecha1);
//     const fechaFinal = new Date(fecha2);

//     const diferencia = fechaFinal - fechaInicio;

//     const diasDiferencia = diferencia / (1000 * 60 * 60 * 24);

//     return diasDiferencia;

// }; 

// const diferencia = calcularDiferencia(fecha1, fecha2);

// console.log(`La difrenecia entre la fecha: ${fechaInicio} y la fecha: ${fechaFinal} es de ${diferencia} dias.`);

``


const fecha1 = 'Dec 1, 2023';
const fecha2 = 'Dec 24, 2023';

function calcularDiferencia(fecha1, fecha2) {
    const fechaInicio = new Date(fecha1);
    const fechaFinal = new Date(fecha2);

    const diferencia = fechaFinal - fechaInicio;

    const diasDiferencia = diferencia / (1000 * 60 * 60 * 24);

    return diasDiferencia;
}

const diferencia = calcularDiferencia(fecha1, fecha2);

console.log(`La diferencia entre la fecha: ${fecha1} y la fecha: ${fecha2} es de ${diferencia} dias.`);





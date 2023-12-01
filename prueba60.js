/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 60:
Programa que calcule el beneficio de un producto despues de restarle:
- 20% de descuento
- 21% de iva
- 15% de irpf
 
*/

function calcularBeneficio(precio){
    const descuento = precio * 0.2;

    const precioConDescuento = parseFloat(precio - descuento);

    const iva = precioConDescuento * 0.21;

    const irpf = parseFloat(precioConDescuento - iva) * 0.15;

    const beneficio = precioConDescuento - iva - irpf;

    return beneficio;
};

console.log(calcularBeneficio(995));
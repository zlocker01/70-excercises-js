/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/


function calcularAreaPoligono(poligono) {
    let resultado = 0;

    if (poligono.tipo === "cuadrado" && poligono.lado) {
        resultado = poligono.lado * poligono.lado;

    } else if (poligono.tipo === "rectangulo" && poligono.base && poligono.altura) {
        resultado = poligono.base * poligono.altura;

    } else if (poligono.tipo === "triangulo" && poligono.base && poligono.altura) {
        resultado = (poligono.base * poligono.altura) / 2;

    } else {
        console.log("Tipo de polígono no válido o faltan datos");

    };

    console.log(resultado);

    return resultado;
};


const poligono = {
    tipo: "cuadrado",
    base: null,
    altura: null,
    lado: 10,
};

calcularAreaPoligono(poligono);




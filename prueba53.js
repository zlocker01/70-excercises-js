/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 53:
Crea una función para encontrar la longitud del mayor
subconjunto de caracteres que no se repiten.
 
Ejemplos:
encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
*/
 

function encontrarSubcadenaSinRepetir(texto){
    //crear var para guardar la subcadena sin repetir
    let subcadenaSinRepetir = '';

    //crerar bar para guardar la subcadena actual
    let subcadenaActual = '';

    //iterar cada letra del texto
    for(caracter of texto){
        //comprobar si caracter existe
        if(subcadenaActual.indexOf(caracter) != -1){
            subcadenaActual = '';
        };

        //añadir caracteres a la subcadena
        subcadenaActual += caracter;
        
        //comprobar longitud de subcadena
        if(subcadenaActual.length > subcadenaSinRepetir.length){
            subcadenaSinRepetir = subcadenaActual;
        };
    };
    
    return subcadenaSinRepetir.length;
};
console.log(encontrarSubcadenaSinRepetir("abcabcbb"));
console.log(encontrarSubcadenaSinRepetir("bbbbb"));
console.log(encontrarSubcadenaSinRepetir("pwwkew"));
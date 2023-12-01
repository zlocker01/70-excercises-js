/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false
*/

function sonCompatibles(lenguaje1, lenguaje2){
    const frontend = ["HTML", "CSS", "JAVASCRIPT"];
    const backend = ["PHP", "JAVA", "PYTHON"];

    if(typeof lenguaje1 === "object"){
        let copia = lenguaje1;
        lenguaje1 = copia[0];
        lenguaje2 = copia[1];
    };


    if((frontend.includes(lenguaje1.toUpperCase())) && (backend.includes(lenguaje1).toUpperCase())
    || 
    (frontend.includes(lenguaje2.toUpperCase())) && (backend.includes(lenguaje2.toUpperCase()))){
        return true;
    } else {
        return false;
    };

};

console.log(sonCompatibles(["HTML", "PHP"]));
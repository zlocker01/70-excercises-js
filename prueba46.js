/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
*/

function calificar(calificacion){
    switch(true){
        case (calificacion >= 0 && calificacion < 3):
            return 'Deficiente';
            break;
        case (calificacion >= 3 && calificacion < 5):
            return 'Insuficiente'
            break;
        case(calificacion >= 5 && calificacion < 6):
            return 'Suficiente';
            break;
        case(calificacion >= 6 && calificacion < 7):
            return 'Bien';
            break;
        case(calificacion >= 7 && calificacion < 9):
            return 'Notable';
            break;
        case(calificacion === 10):
            return 'Sobresaliente';
            break;
    }
};

console.log(calificar(8.6));
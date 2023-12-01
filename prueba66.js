/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 66:
Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
Puedes hacer que la función tome una afiliación como parámetro 
y muestre la información de los superhéroes que pertenecen a esa afiliación.
 
Ejemplos:
filtrarPorAfiliacion('Crimen organizado')
 
*/

function filtrarPorAfiliacion(afiliación){
    let resultados = [];

    for(const nombrePersonaje in personajesDC){
        const información = personajesDC[nombrePersonaje];

        if(información.afiliación === afiliación){
            resultados.push({
                nombre: nombrePerosnaje,
                nomreReal: información.nombreReal,
                poderes: informacion.poderes
            });
        };
    };

    return resultados;
};

console.log(filtrarPorAfiliacion('Crimen organizado'));
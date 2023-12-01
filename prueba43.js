/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/

function puedeFormarPalabra(palabra, coleccion){
    //aplanar los arrays en uno solo
    let todasLasLetras = coleccion.flat();

    //iterar cada letra de la palabra
    for(const letra of palabra){
        //comprobar si las letras de la palabra existen en la coleccion
        if(todasLasLetras.includes(letra)){
            return true;
        } else {
            return false;
        };
    };
    return todasLasLetras;
};


let coleccion = [
    ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
];


console.log(puedeFormarPalabra('PERRO', coleccion));
console.log(puedeFormarPalabra('CASO', coleccion));
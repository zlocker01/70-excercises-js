/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique

Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
*/


function simplificarRuta (ruta){
    //crear variable pila para simplificar la ruta
    let pila = [];

    //dividir ruta en sus difrentes partes
    const partes = ruta.split('/');

    //iterar
    for(const parte of partes) {

        //si es .. QUITAR EL ILTIMO ELEMENTO QUE ES ..
        if(parte === '' || parte === '.'){
            pila.push(parte);
        } else if (pila === '..') {
            pila.pop(parte);
        } else {
            pila.push(parte);
        };

    };

    return pila;
};

console.log(simplificarRuta('/home/./pruebas/../prueba2'));


console.log(simplificarRuta("../home/"));             // Salida: /home
console.log(simplificarRuta("/x/./y/../../z/"));    // Salida: /z
console.log(simplificarRuta("/../"));    
console.log(simplificarRuta("/../"));    

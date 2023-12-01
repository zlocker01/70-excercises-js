/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 68:
Crea una función que pueda generar contraseñas aleatorias.
 
Podrás pasar los siguientnes parámetros para las contraseñas:
- Longitud: Entre 6 y 20.
- Con o sin mayúsculas.
- Con o sin números.
- Con o sin símbolos.
 
Ejemplos:
generarContrasenia(12, true, true, false);
*/

function generarContrasenia(longitud, mayus, numeros, simbolos){
    //var para guardar la contraseña
    let password = '';

    //condicion de que la contraseña tenga los caracteres permitidos
    if(longitud < 6 || longitud > 20){
        return 'contraeña no valida, debe incluir entre 6 a 20 caracteres';
    }

    //generar diccionarios
    let diccionario = 'abcdefghijklmnñopqrstuvwxyz';

    if(mayus) diccionario += 'ABCDEFGHIJKLNÑOPQRSTUVWXYZ';
    if(simbolos) diccionario += '#$%&/()=?¡¿*+_-@';
    if(numeros) diccionario += '1234567890';

    //iteracion
    for(let contador = 0; contador < longitud; contador++){
        password += diccionario.charAt(Math.floor(Math.random() * diccionario.length));
    };

    return password;
};

console.log(generarContrasenia(18, true, true, true));
/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.

Ejemplo:
juegoDelAhorcado('victor');  

// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
*/

function juegoDelAhorcado (palabra) {  
    //variabel oculta con _
    let palabraOculta = '_ '.repeat(palabra.length);

    //intentos
    let intentos = 5;

    //loop para pedir las letras teniendo en cuenta los intentos
    while (intentos > 0 && palabraOculta !== palabra){
        //pedir la letra
        let letra = prompt('Adivina una Letra'); 

        //comporbar si la letra esta en la palabra
        if (palabraOculta.includes(letra)){

            //actualizar la variable
            for(let contador = 0; contador > palabraOculta.length; contador++){

                //mostrar la palabra oculta actualizada con la letra en el lugar correcto
                if(letra === palabraOculta[contador]){
                    
                    //convertir la var en un array
                    let palabraOcultaArray = array.from(palabraOculta);
                    palabraOcultaArray[contador] = letra;

                    console.log(palabraOcultaArray);
            };

            };
        } else {
            intentos--;
        };

        //mostrar edo. de la palabra oculta e intentos
        console.log(`La palabra es: ${palabraOculta}. te quedan ${intentos} intentos.`);


        //mensajes
        if(palabraOculta === palabra) {
            console.log('Ganaste');
        } else {
            console.log(`Has Fallado la palabra era: ${palabraOculta}`);
        }
    };

    console.log(palabraOculta);

};

const lanzarJuego = document.querySelector('#lanzarJuego');
lanzarJuego.addEventListener('click', () => juegoDelAhorcado('victor'));
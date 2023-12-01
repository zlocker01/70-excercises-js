/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(5);
 
Devuelve: 
  *
 *** 
*****
 *** 
  *  

*/

function generarDiamante(size){
  //forzar que el tamaño sea igual
  if( size % 2 === 0) size--;

  //calcular la mitad del diamante  en numeros enteros
  const mitad = Math.floor(size / 2);

  //recorrer las filas del diamante
  for(let filaActual = 0; filaActual < size; filaActual++){
    //var para guardar los *
    let fila = '';

    //calcular número de espacios
    const espacios = Math.abs(mitad) - filaActual; //convertimos con metodo abs los num - a +

    //imprimir espacios en filas
    for(let espacioActual = 0; espacioActual < espacios; espacioActual++){
      fila += ' ';
    };

    // imprimir *
    for(let asteriscoActual = 0; asteriscoActual < size - (espacios*2); asteriscoActual++){
      fila += '*';    
    };

    console.log(fila);
  };
};

console.log(generarDiamante(5));
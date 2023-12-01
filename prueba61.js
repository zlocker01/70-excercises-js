/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 61:
Dado una cadena de números, devuelve todas las combinaciones de letras posibles 
que el número podría representar.
 
Aqui tienes un mapeo de dígitos a letras 
(como en los botones de un teléfono).
 
    const mapeo = [
      ' ', // 0
      '', // 1
      'abc', // 2
      'def', // 3
      'ghi', // 4
      'jkl', // 5
      'mno', // 6
      'pqrs', // 7
      'tuv', // 8
      'wxyz' // 9
    ];
 
Ejemplos:
combinacionesLetras("23")
 
Devuelve:
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 
*/



function combinacionesLetras(numeros){
  //comprobar si el numero es valido
      if(numeros.length === 0) return [];

      //mapear letras
      const mapeo = [
          ' ', // 0
          '', // 1
          'abc', // 2
          'def', // 3
          'ghi', // 4
          'jkl', // 5
          'mno', // 6
          'pqrs', // 7
          'tuv', // 8
          'wxyz' // 9
      ];

      //crear una array para guardar los resultados
      let resultados = [''];

      //iterar los digitos
      for(const digito of numeros){

        //iterar sumando letras para actualizar resultados
        for(let i = 0, longitud = resultados.length; i < longitud; i++){

          //variable para colocar la letra anteriro al inico
          const elementoAnterior = resultados.shift();

          //sacar las letras 
          for(const letra of mapeo[digito]){
            resultados.push(elementoAnterior + letra);
          };

        };

      };

      return resultados;
    };

    console.log(combinacionesLetras("23"));
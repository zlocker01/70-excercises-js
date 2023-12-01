/*
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
*/
function generarMatriz(numero) {
  // Crear un array vacío para almacenar la matriz
  let matriz = [];

  // Inicializar una variable acumuladora para los números de la matriz
  const numeroActual = 1;

  // Bucle para las filas
  for (let fila = 0; fila < numero; fila++) {
    // Crear una fila nueva en la matriz usando push
    matriz.push([]);

    // Bucle para generar números en cada fila
    for (let columna = 0; columna < numero; columna++) {
      // Agregar el número actual a la fila actual y aumentar el número actual en 1
      matriz[fila].push(numeroActual++);
    }
  }

  // Devolver la matriz generada
  return matriz;
}

// Ejemplo de uso: generar una matriz de 4x4
console.log(generarMatriz(4));
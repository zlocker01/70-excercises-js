/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano

Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV 
*/

function numeroRomano(numero){
    //variable para guardar el resultaod final
    let resultado = '';

    //listado nuemros Romnanos
    const caracteresRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    //equivalencia de numeros decimales
    const numerosDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    //loop para iterar numeros decimales
    for(let i = 0; i < numerosDecimales.length; i++){
        //loop para iterar minetras el numero sea <= al decimal que recorro
        while(numero >= numerosDecimales[i]){

            //add numero romano
            resultado += caracteresRomanos[i];

            //actualziar numero 
            numero -= numerosDecimales[i];
        };
    };

    //devovler resultado
    return [resultado];
};

console.log(numeroRomano(140));
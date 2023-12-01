/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 
*/

function deboSerSocio(veces){
    //calcular llenado individual 
    let llenadoIndividual = 10 * veces;

    let llenadoSocio = 90;

    //calcular precio de llenados como socio
    //loop de 1 a total de llenados
    for(let i = 0; i <= veces; i++){
        //calcular descuento
        let descuento = (0.78 ** i); //** elevar  numero a cifra completa

        //bloquear descuento cuando llega al 50%
        if(descuento <= 0.50){
            descuento = 0.50;
        };

        //actualizar a socio y sumar valores
        llenadoSocio += 8.2 * descuento;
    };

    //string con resultado
    let resultado = '';

    if(llenadoIndividual < parseFloat(llenadoSocio.toFixed(2))){
    resultado += `Como usuario casual te sale a: ${llenadoIndividual} Euros.        
    Como socio te sale a: ${parseFloat(llenadoSocio.toFixed(2))} Euros.
    No te sale a cuenta ser socio`;

    } else {
        resultado += `Como usuario casual te sale a: ${llenadoIndividual} Euros.        
    Como socio te sale a: ${parseFloat(llenadoSocio.toFixed(2))} Euros.
    Si te sale a cuenta ser socio`

    };

    return resultado;
};

console.log(deboSerSocio(40));
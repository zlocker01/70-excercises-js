/* 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años

Ejemplo:
bisiestos(2023);

// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
*/

function viciestos(year){
    //variable con limite de años (30)
    const limite = 30;

    //Loop que se ejecute tantas veces como años tenga
    for(let i = 0; i <= limite; i++){
        //Comprobar si el 29 de febrero existe en el año
        const fecha = new Date(year, 1, 29).getMonth(); 
        
        //mostrar año viciesto
        if(fecha === 1){
            console.log(year);
        };

        year++;
    };
};

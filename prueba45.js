function eliminarDuplicados(numeros){
    //ordenar el array
    numeros.sort((a, b) => a - b);

    //crear array vacio
    let numerosUnicos = [];

    //iterar el array orignal y comprobar si existe el elemento
    for(const numero of numeros){
        if(!numerosUnicos.includes(numero)){
            numerosUnicos.push(numero);
        };
    };

    return numerosUnicos;
};

console.log(eliminarDuplicados([1, 1, 4, 2, 3, 5, 5, 2, 5, 6]));
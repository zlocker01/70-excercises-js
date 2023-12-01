function palindromo(texto){
    //dividir el texto en array de letras
    const textoDividido = texto.split('');

    
    //darle la vuelta al array
    textoDividido.reverse();
    
    //unir el array en un string
    let textoNuevo = textoDividido.join('');

    //comparar ambos textos
    if(texto !== textoNuevo){
        return false;
    } else {
        return true;
    };
};

palindromo('otto');
palindromo('diego');

module.exports = palindromo;
/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.

Y añade una capacidad de buscar la información de varios superhéroes a la vez.

Ejemplo:
mostrarInformacionSuperheroe('Iron Man');

Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
*/


const superHeroes = {
    'Iron-Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnología avanzada', 'Movilidad aérea'],
        equipo: 'Los Vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['sentido aracnico', 'telaraña'],
        equipo: 'Los Vengadores'
    },
    'Daredevil': {
        nombreReal: 'Matt Murdock',
        poderes: ['sentidos agudizados', 'capacidades fisico-atelticas sobre humanas'],
        equipo: 'Independiente'
    },
    'Punisher': {
        nombreReal: 'Frank Castle',
        poderes: ['entrenamiento militar de elite', 'armamento'],
        equipo: 'Independiente'
    },
};


function mostrarInformacionSuperheroe (aka){

    if( aka in superHeroes ) {

        const info = superHeroes[aka];

        console.log( `####${aka}####
        Nombre Real: ${info.nombreReal}
        Poderes: ${info.poderes}
        Equipos: ${info.equipo}` 
        );
    } 
    else {
        console.log(`####${aka}####
        ${aka} no está registrado`);
    }

};

mostrarInformacionSuperheroe('Daredevil');


const infoMultiple = (akas) => {

    akas.forEach(nombre => {

        mostrarInformacionSuperheroe(nombre);

    });

};

    infoMultiple(['Daredevil', 'Punisher', 'Invencible']);

   
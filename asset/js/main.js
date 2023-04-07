/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


/*

1- genero 5 numeri casuali

*/

//numeri casuali
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
};


//contenitore primi 5 numeri
let numeriArray = [];


//inserisco i numeri generati nell'array e controllo che siano unici
while ( numeriArray.length < 5 ){

    let random = randomNumber();

    if ( !numeriArray.includes(randomNumber)) {

        numeriArray.push(random);
    };

};

console.log(numeriArray);
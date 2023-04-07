/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


/*

1- genero 5 numeri casuali

2- stampaimo i numeri in pagina

3- far scomparire i numeri dopo tot secondi

4- l'utente inserisce i numeri

5- i numeri inseriti vanno nell'array

6- confronto dei due array

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

    if ( !numeriArray.includes(random)) {

        numeriArray.push(random);
    };

};

console.log(numeriArray);

//stampiamo i nuemri in pagina
for ( let i = 0; i < numeriArray.length; i++ ) {
    document.getElementById('ul').innerHTML += `<li>${numeriArray[i]}</li>`
}


//i numeri scompaiono
setTimeout ( function() {
    document.getElementById('ul').innerHTML = ``
}, 2500)

//inserisco i 5 input
setTimeout ( function() {
    
    for (let k = 1; k < 6; k++ ) {

    document.getElementById('ul2').innerHTML += `<li><input type="number" class="form-control" id="input${k}"></li>`

    console.log(k);

    };

}, 2500)

//array dei numeri inseriti
let nuemriInput = [];

//i numeri inseriti vanno nell'array
setTimeout ( function(){

    let in1 = document.getElementById('input1').value;
    let in2 = document.getElementById('input2').value;
    let in3 = document.getElementById('input3').value;
    let in4 = document.getElementById('input4').value;
    let in5 = document.getElementById('input5').value; 
    // console.log(in1);
    // console.log(in2);
    // console.log(in3);
    // console.log(in4);
    // console.log(in5);

    nuemriInput[0] = parseInt(in1);
    nuemriInput[1] = parseInt(in2);
    nuemriInput[2] = parseInt(in3);
    nuemriInput[3] = parseInt(in4);
    nuemriInput[4] = parseInt(in5);

    console.log(nuemriInput);
}, 25000)


//confronto dei numeri generati da quelli inseriti
let uguali = true;
setTimeout (function(){

    for (let j = 0; j < numeriArray.length; j++) {
        if (numeriArray[j] !== nuemriInput[j]) {
            uguali = false;
            break;
        }
    }
    
    if (uguali) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso.');
    }
}, 26000)








'use:strict'
/* const pariDispari = prompt('pari o dispari');
const  numeroUtente = Number(prompt('inserisci un numero')); */



 
const text = prompt('pari o dispari');

function pariDispari(text){
    if(text == 'pari'){
        return 'pari';
    } return 'dispari';
}

 console.log(pariDispari(text));
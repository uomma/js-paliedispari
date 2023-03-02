'use strict'



/*FUNCTIONS */

function pariDispari(text) {
    if (text == 'pari') {
        return 'pari;'
    } return 'dispari'
}

function between(min, max) {
    if (x >= min && x <= max) {
        return x;
    }

}
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function vincitore(sum) {
    let check = 'vince dispari';
    if (sum % 2 == 0) {
        check = 'vince pari'

    } return check
}


/*FUNCTIONS */


const text = prompt('pari o dispari');
console.log(pariDispari(text));


const x = prompt('inserisci un numero tra 1 e 5')
console.log(x)


const numeroCpu = randomNumbers(1, 5);
console.log('numero della cpu:' + numeroCpu)


//somma i due numeri

const num1 = parseInt(x);
const num2 = parseInt(numeroCpu);

const sum = num1 + num2;
console.log(`La somma di ${num1} e ${num2} è ${sum}`);



console.log(vincitore(sum))
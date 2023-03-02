
//mio
'use strict'
const text= prompt('pari o dispari');

function pariDispari(text){
    if(text== 'pari'){
        return 'pari;'
    }return 'dispari'
}

function between( min, max) {
    if(x >= min && x <= max){
        return x ;
    }
    
}
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
/*   
function sommaNumeri(x,numeroCpu){
    const somma = x + numeroCpu;
    return somma;
} */
console.log(pariDispari(text));


const x=prompt('inserisci un numero tra 1 e 5')


console.log(x)


const numeroCpu = randomNumbers(1,5);

console.log('numero della cpu:' + numeroCpu)


//somma i due numeri
// store input numbers
const num1 = parseInt(x);
const num2 = parseInt(numeroCpu);

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`La somma di ${num1} e ${num2} è ${sum}`);


function vincitore (sum){
    let check = 'vince dispari';
if( sum % 2 ==0){
    check= 'vince pari'
    
}return check
}


console.log(vincitore(sum)  )
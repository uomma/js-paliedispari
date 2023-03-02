'use strict';
    

function palindroma(string) {

  
    const len = string.length;


    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'non è palindroma';
        }
    }
    return 'è palindroma';
}

const string = prompt('inserisci una parola');

const value = palindroma(string);

console.log(value);
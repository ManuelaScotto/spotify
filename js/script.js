// PROMPT
var userText = prompt('qual è il tuo nome');
console.log(userText);

document.getElementById('name').innerHTML= userText;

document.getElementById('creato').innerHTML='Creato per ' + userText;


// VARIABILE METODO 1
var number = 5;

console.log(number);

// VARIABILE METODO 2
var miaVariabile;

console.log(miaVariabile);

// a questo punto basta mettere il nome della variabile senza dover riscrivere var
miaVariabile = 'hello';

console.log(miaVariabile);

miaVariabile = 'arrivederci';

console.log(miaVariabile);

// NUMERI
var somma = 4 + 4;
console.log(somma);

var sottr = somma - 2 ;
console.log(sottr);

var molt = somma * sottr;
console.log(molt);

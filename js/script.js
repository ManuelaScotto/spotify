// PROMPT
var userText = prompt('qual è il tuo nome');
console.log(userText);

document.getElementById('name').innerHTML= userText;

document.getElementById('creato').innerHTML='Creato per ' + userText;

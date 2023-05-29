/*MILESTONE 1*/

//TEST PER VEDERE SE FUNZIONA
console.log('JS OK');

//RECUPERO IL BOTTONE
const button = document.getElementById('button');

//RECUPERO IL NOME, I CHILOMETRI E L'ETA'
const nameInput = document.getElementById('first-name');
const kmInput = document.getElementById('kilometers');
const ageInput = document.getElementById('my-age');

//PRENDO L ELEMENT0 DAL DOM DEL TOTALE
const totalElement = document.getElementById('total');

//PRENDO L ELEMENT0 DAL DOM NOME CHE POI STAMPERO'
const yourName = document.getElementById('your-name');

//PRENDO L ELEMENT0 DAL DOM DEL NUMERO DI CARROZZA
const carriageNumber = document.getElementById('carriage-number');

//PRENDO L ELEMENT0 DAL DOM DEL NUMERO DEL BIGLIETTO
const ticketNumber = document.getElementById('ticket-number');

//PREPARO IL MESSAGGIO PER L'UTENTE IN MERITO AL PREZZO DEL BIGLIETTO
const priceMessage = 'Il prezzo del suo biglietto è: € ';

//PREPARO IL MESSAGGIO PER L'UTENTE IN MERITO AL NOME E COGNOME
const nameMessage = 'Nome e Cognome:';

//PREPARO IL MESSAGGIO PER L'UTENTE IN MERITO AL NUMERO DI CARROZZA
const carriageMessage = 'Numero di carrozza:';

//PREPARO IL MESSAGGIO PER L'UTENTE IN MERITO AL NUMERO DEL BIGLIETTO
const ticketMessage = 'Numero del biglietto:';

//PREPARO IL PREZZO PER CHILOMETRO
const pricePerKm = 0.21;

//PREPARO EVENTUALE SCONTO
let discount = null;

//RESTO IN ASCOLTO DI UN CLICK SU QUESTO BOTTONE
button.addEventListener('click', function (){
    //COLLEGO I DATI A QUELLI INSERITI DALL'UTENTE
    const userName = nameInput.value;
    console.log(userName);
    const kms = kmInput.value;
    console.log(kms);
    const age = ageInput.value;
    console.log(age);

// VALIDAZIONE DEI DATI INSERITI
if (isNaN(kms) || isNaN(age) || (age <=0) || (kms <=0)) {
    alert('I dati inseriti non sono corretti');
}

else {
//CALCOLO IL PREZZO
const basePrice = pricePerKm * kms;
console.log(basePrice);

//INSERISCO IL NOME NELL'ELEMENTO IN PAGINA
yourName.innerText = nameMessage + userName;

//INSERISCO IL PREZZO NELL'ELEMENTO IN PAGINA
totalElement.innerText = priceMessage + basePrice.toFixed(2);
}

//GENERO IL NUMERO DI CARROZZA
const maxCarriage = 20;
carriageResult = Math.floor(random * maxCarriage)
//GENERO IL NUMERO DI BIGLIETTO 
const maxTicket = 99999;
ticketResult = Math.floor(random * maxTicket)

//INSERISCO IL NUMERO DI CARROZZA GENERATO NELL'ELEMENTO IN PAGINA
carriageNumber.innerText = carriageMessage + carriageResult;

//INSERISCO IL NUMERO DI BIGLIETTO GENERATO NELL'ELEMENTO IN PAGINA
ticketNumber.innerText = ticketMessage + ticketResult;

//VALUTO EVENTUALE SCONTO
if (age >= 65) discount = 40;
else if (age < 18) discount = 20;

if (discount) {
//RECUPERO L'ELEMENTO DAL DOM DELLO SCONTO E DEL PREZZO SCONTATO
const discountElement = document.getElementById('discount');
const discountPriceElement = document.getElementById('discount-price');

//PREPARO IL MESSAGGIO PER L'UTENTE
const discountMessage = `Lo sconto a lei riservato è del ${discount}%`;

//INSERISCO LO SCONTO NELL'ELEMENTO IN PAGINA
discountElement.innerText = discountMessage;

//CALCOLO IL PREZZO
const basePrice = pricePerKm * kms;
console.log(basePrice);

//CALCOLARE LO SCONTO
const discountPrice = (basePrice / 100) * discount;
console.log(discountPrice);

//CALCOLARE IL PREZZO SCONTATO
const finalPrice = basePrice - discountPrice;
console.log(finalPrice);

//INSERISCO IL PREZZO NELL'ELEMENTO IN PAGINA
totalElement.innerText = priceMessage + basePrice.toFixed(2);

//AGGIUNGO IL PREZZO SCONTATO
discountPriceElement.innerHTML = `Il prezzo scontato è: € ${finalPrice.toFixed(2)}`;
}

});
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

//PREPARO IL MESSAGGIO PER L'UTENTE
const priceMessage = 'Il prezzo del suo biglietto è: € ';

//PREPARO IL MESSAGGIO PER L'UTENTE
const nameMessage = 'Nome e Cognome:';

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

//INSERISCO LO SCONTO NELL'ELEMENTO IN PAGINA
yourName.innerText = nameMessage + userName;

//INSERISCO IL PREZZO NELL'ELEMENTO IN PAGINA
totalElement.innerText = priceMessage + basePrice.toFixed(2);
}

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
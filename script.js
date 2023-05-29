//TEST PER VEDERE SE FUNZIONA
console.log('JS OK');

//PRENDO L ELEMENT0 DAL DOM DEL TOTALE
const totalElement = document.getElementById('total');

//PREPARO IL MESSAGGIO PER L'UTENTE
const priceMessage = 'Il prezzo del suo biglietto è: € ';

//PREPARO IL PREZZO PER CHILOMETRO
const pricePerKm = 0.21;

//PREPARO EVENTUALE SCONTO
let discount = null;

//RACCOGLIAMO LE INFORMAZIONI DALL'UTENTE
const kms = parseInt(prompt('Quanti km devi percorrere?'));
const age = parseInt(prompt('Quanti anni hai?'));
console.log(kms, age);

// VALIDAZIONE DEI DATI INSERITI
if (isNaN(kms) || isNaN(age) || (age <=0) || (kms <=0)) {
    alert('I dati inseriti non sono corretti');
}

else {
//CALCOLO IL PREZZO
const basePrice = pricePerKm * kms;
console.log(basePrice);

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
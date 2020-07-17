//var nameField = document.getElementById('nameField').value;
//var kmField = document.getElementById('nameField').value;

var button = document.getElementById('genera');

button.addEventListener('click',function(){
    var name = document.getElementById('nameField').value
    var km = document.getElementById('kmField').value;
    var price = document.getElementById('passengerAge').value; 
    document.getElementById('passegJS').innerHTML = name;
    calcoloPrezzo(km,price); 
    document.getElementById('tickContainer').classList.add('ticket-container');


    offerta(price);
    document.getElementById('carrozzaJS').innerHTML = numeroCarrozza();
    document.getElementById('codiceCP').innerHTML = randomNumber(900000,1000000);
});














/*******************************************/

function calcoloPrezzo(km,passengerAge) {
    var km ;
    var passengerAge ;
    const kmPrice = 0.21 ;
    var ticketPrice =  km * kmPrice ;
    var discountUnder = 20 * ticketPrice / 100;
    var discountOver = 40 * ticketPrice / 100;

    var finalPrice = ticketPrice ;

    if (passengerAge == 0 ) {
        finalPrice = ticketPrice - discountUnder;
        document.getElementById('costoTicketJS').innerHTML = 'Il costo del biglietto e\' di:' + ' '+ finalPrice.toFixed(2)  ;  
    } else if (passengerAge == 2) {
        finalPrice = ticketPrice - discountOver;
        document.getElementById('costoTicketJS').innerHTML = 'Il costo del biglietto e\' di:' + ' '+ finalPrice.toFixed(2);  
    } else {
        document.getElementById('costoTicketJS').innerHTML =  finalPrice.toFixed(2) ;  
    }
}

    function offerta(par1) {
       
        if (par1 == 0) {
            document.getElementById('offertaJS').innerHTML = 'Sconto Under';
        } else if (par1 == 2) {
            document.getElementById('offertaJS').innerHTML = 'Sconto Over';
        } else {
            document.getElementById('offertaJS').innerHTML = 'Tariffa normale';
        }
    }


    function numeroCarrozza() {
        return Math.floor((Math.random() * 10) + 1);
    }

    function randomNumber(max,min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



let ticketPrice;
// Prendere il valore che ha inserito l'utente in "km da percorrere", trasformalo in numero e metterlo nella variabile
const km = parseInt(document.getElementById("km").value);

console.log("I km che ha inserito sono:", km);

// Prendere il valore che ha inserito l'utente in "inserisci la tua età", trasformarlo in numero e metterlo nella variabile
const ageUser = parseInt(document.getElementById("age").value);

console.log("L'età della persona è:", ageUser);



// calcolo prezzo totale
const fullPrice = km * 0.21;
console.log("il prezzo totale è:", fullPrice);

// calcolo sconto
let discount20 = fullPrice * 20 / 100;
console.log("lo sconto del 20% è:", discount20);

let discount40 = fullPrice * 40 / 100;
console.log("lo sconto del 40% è:", discount40);




// prendo l'elemento che deve cliccare la persona
const generate = document.querySelector(".genera");
console.log(generate);

// quando clicco su "Genera" dovrà fare i calcoli
generate.addEventListener('click',
    function(){
        if(ageUser < 18){ // se età minore 18 -> sconto 20%
                ticketPrice = fullPrice - discount20;
                console.log("hai diritto a:", discount20, "quindi ti costa:", ticketPrice);
            } else if (ageUser > 65){ // se età maggiore 65 -> sconto 40%
                ticketPrice = fullPrice - discount40;
                console.log("hai diritto a:", discount40, "quindi ti costa:", ticketPrice);
            } else { // altrimenti prezzo intero 0.21 * numero chilometri
                ticketPrice = fullPrice;
                console.log("non hai sconti. Qundi ti costa:", ticketPrice);
            }
    }
);



 


// console.log("il costo del tuo biglietto è di:", ticketPrice);


// // arrotondo il prezzo con due decimali
// let ticketPriceRounded = ticketPrice.toFixed(2);
// console.log(ticketPriceRounded);


// // output a schermo: "il prezzo del biglietto è: "
// document.getElementById("my_ticket").innerHTML = `Il prezzo del tuo biglietto è di ${ticketPriceRounded} euro!`;
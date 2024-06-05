// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// prendo l'elemento che deve cliccare la persona
const generate = document.querySelector(".genera");
console.log(generate);

// prendo il div che contiene il prezzo finale del biglietto
const displayTicket = document.querySelector(".output_ticket");

// quando clicco su "Genera" dovrà fare i calcoli e non solo...
generate.addEventListener('click',
    function(){
        // Prendere il valore che ha inserito l'utente in "km da percorrere", trasformalo in numero e metterlo nella variabile
        let km = parseInt(document.getElementById("km").value);
        console.log("I km che ha inserito sono:", km);

        // Prendere il valore che ha inserito l'utente in "inserisci la tua età", trasformarlo in numero e metterlo nella variabile
        let ageUser = parseInt(document.getElementById("age").value);
        console.log("L'età della persona è:", ageUser);

        // calcolo prezzo totale
        let fullPrice = km * 0.21;
        console.log("il prezzo totale è:", fullPrice);

        // calcolo sconto
        let discount20 = fullPrice * 20 / 100;
        console.log("lo sconto del 20% è:", discount20);

        let discount40 = fullPrice * 40 / 100;
        console.log("lo sconto del 40% è:", discount40);

        if(ageUser < 18){ // se età minore 18 -> sconto 20%
                let ticketPrice = fullPrice - discount20;
                console.log("hai diritto a:", discount20, "quindi ti costa:", ticketPrice);
            } else if (ageUser > 65){ // se età maggiore 65 -> sconto 40%
                let ticketPrice = fullPrice - discount40;
                console.log("hai diritto a:", discount40, "quindi ti costa:", ticketPrice);
            } else { // altrimenti prezzo intero 0.21 * numero chilometri
                let ticketPrice = fullPrice;
                console.log("non hai sconti. Qundi ti costa:", ticketPrice);
            }
        
        console.log("il costo del tuo biglietto è di:", ticketPrice);

        // arrotondo il prezzo con due decimali
        let ticketPriceRounded = ticketPrice.toFixed(2);
        console.log("il costo del tuo biglietto è di:", ticketPriceRounded);   
        
        // output a schermo: "il prezzo del biglietto è: "
        document.querySelector(".price").innerHTML = ticketPriceRounded;
        
        // mostrare il biglietto aggiungendo all'elemento la classe "show" che ho dato in css
        displayTicket.classList.add("show");
    }
);





// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
// le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
// perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri
// generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo
// possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che
// l'utente ha cliccato su una cella che non era una bomba.

// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano,
// dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const buttonInput = document.querySelector('button');

const quadratone = document.querySelector ('.quadratone');

const diffSelect = document.getElementById('difficulty');
console.log('diffSelect', diffSelect, typeof diffSelect);

const bomb = [];


// ciclo for per creare 16 numeri casuali

for (let i = 0; i < 16; i++) {

    // Genero numeri casuali
    const randomBomb = generateRandomNumber(1, 100);
    console.log(randomBomb);

    // Controllo se questo numero appena generato è già presente nell'array
    let foundInArray = bomb.includes(randomBomb);

    while (foundInArray == true) {

        randomBomb = generateRandomNumber(1, 100);
        console.log (randomBomb);

        foundInArray =bomb.includes(randomBomb);
        
    }

    bomb.push (randomBomb);

    console.log(bomb);
    
}


buttonInput.addEventListener('click', function(){


    quadratone.innerHTML = '';


    
    const cellNumber = parseInt(diffSelect.value);
    for (let i = 1; i <= cellNumber; i++){

        const square = document.createElement ('div');

        // AGGIUNGO LA CLASSE SQUARE ALLA COSTANTE SQUARE 
        square.classList.add ('square');

        square.innerHTML = i;


        //  console.log(square)

        // APPENDO LA CLASSE SQUARE NEL QUADRATONE CONTAINER 
        quadratone.append(square);

        square.addEventListener('click', function(){

            this.classList.toggle ('active');
            console.log (this.innerHTML);

        });
    }
}
);

// FUNZIONE 

function generateRandomNumber (min, max) {
    const randNUm = Math.floor (Math.random () * (max - min + 1)) + min;

    return randNUm;
}

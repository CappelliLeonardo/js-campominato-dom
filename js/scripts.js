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





buttonInput.addEventListener('click', function(){

    let start = true;

    quadratone.innerHTML = '';

    let bomb = [];

    let point = 0;



    // ciclo for per creare 16 numeri casuali    
    for (let i = 1; i <= 16; i++) {

        // Genero numeri casuali
        let randomBomb = generateRandomNumber(1, 100);
        // console.log(randomBomb);
    
        // Controllo se questo numero appena generato è già presente nell'array
        let foundInArray = bomb.includes(randomBomb);
    
        while (foundInArray == true) {
    
            randomBomb = generateRandomNumber(1, 100);
            console.log (randomBomb);
    
            foundInArray = bomb.includes(randomBomb);
            
        }
    
        bomb.push (randomBomb);
    }

    console.log(bomb);

    const cellNumber = parseInt(diffSelect.value);
    for (let i = 1; i <= cellNumber; i++){

        const square = document.createElement ('div');

        // AGGIUNGO LA CLASSE SQUARE ALLA COSTANTE SQUARE 
        square.classList.add ('square');

        square.innerHTML = i;


        //  console.log(square)

        // APPENDO LA CLASSE SQUARE NEL QUADRATONE CONTAINER 
        quadratone.append(square);

        // evento click del quadrato
        square.addEventListener('click', function(){

            if ( start == false){
                return
            }
            
            this.classList.add ('active');
            // verrà incrementato di un unità ogni volta cliccato sqaure notbomb
            point += 1; 
            console.log (i);
            

            for(let j = 0; j < bomb.length; j++){
                if(i == bomb[j]){
                    square.classList.add ('squarebomb');
                    console.log( 'hai preso una bomba');
                    start = false;
                    alert ('Il tuo punteggio è di' + point)
                }
            }


        });
    }



});



// FUNZIONE 

function generateRandomNumber (min, max) {
    const randNUm = Math.floor (Math.random () * (max - min + 1 )) + min;

    return randNUm;
}

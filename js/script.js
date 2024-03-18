//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.


//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//generare 16 numeri casuali
let bombList = [];
for(let i = 0; i < 16; i++){

   let bombNumber = Math.floor(Math.random() * 100) + 1;
   //se il numero non è presente nell'array lo inserisco
   if (bombList.includes(bombNumber) === false) {
    bombList.push (bombNumber);
   }
}
console.log(bombList);


const mainGrid = document.querySelector('#grid');
console.log(mainGrid);

//al click sul bottone genero la griglia
const btnPlay = document.querySelector('#btn');
btnPlay.addEventListener('click', function() {
    mainGrid.innerHTML = '';

    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
    }
})


// Funzione che genera un quadrato
// number -> rappresenta il numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    
    //click su ogni quadrato
    newSquare.addEventListener('click', function() {
            
        this.classList.add('clicked');
        console.log(number);
    });
    return newSquare;
}
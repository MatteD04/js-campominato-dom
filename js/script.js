//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.


//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//generare 16 numeri casuali
let bombList = [];
for(let i = 0; i < 16; i++){
    let bombNumber = Math.floor(Math.random() * 100) + 1;

    //se il numero non è presente nell'array lo inserisco
    if (bombList.includes(bombNumber) === false) {
     bombList.push(bombNumber);
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

//recuperare il contatore
const contatore=document.querySelector(".contatore");

// Funzione per aggiornare il punteggio
let score = 0
function updateScore(score) {
    // Incremento lo score
    score++;
    // Lo inserisco nel contatore
    contatore.innerText = String(score).padStart(4, 0);

    return score;
}


// Funzione che genera un quadrato
// number -> rappresenta il numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    
    //click su ogni quadrato
    newSquare.addEventListener('click', function() {
        
        //se il numero è nell'array delle bombe dare la classe red e l'alert
        if(bombList.includes(parseInt(this.children[0].innerHTML))){
            this.classList.add('bomb');
            setTimeout(function(){
                alert('hai perso');
            },0);
        } else{
            this.classList.add('clicked');
            const newScore = updateScore(score++);
        }
        
        console.log(number);
    });
    return newSquare;
}

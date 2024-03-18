//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
//ed emetto un messaggio in console con il numero della cella cliccata.

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
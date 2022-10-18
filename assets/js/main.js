/* CAMPOMINATO PART I */

/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* CAMPOMINATO PART II */


/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

/* Tools:
    -eventlistener sul button in attesa di click
    -const/let
    -for loop
    -mathceil
    -event listener sulla singola cella in attesa di click
    -console.log
*/


//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//eventlistener sul button
//ciclo for per generare griglia
//ad ogni indice assegno un num progressivo da 1 a 10


//seleziono l'elemento della DOM per eventListener
const generateElement = document.querySelector("button.generate");
//seleziono l'elemento della DOM dove inserirò le celle
const containerElement = document.querySelector(".container");
const levelEl = document.getElementById("levels");


//applico event listener al click sul button
generateElement.addEventListener("click", function () {
    containerElement.innerHTML = "";
    const level = levelEl.value;
    let maxCellsNumb;
    if (level == "1") {
        maxCellsNumb = 100;
    } else if (level == "2") {
        maxCellsNumb = 81;
    } else {
        maxCellsNumb = 49;
    }
    let rowLenght = Math.sqrt(maxCellsNumb);
    //Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    const bombs = [];
    while (bombs.length !== 16) {
        const bomb = randomNumb(1, maxCellsNumb);
        //console.log(bomb);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    console.log(bombs);

    
    for (let i = 0; i < maxCellsNumb; i++) {
        const cell = divGenerator(i + 1);
        cell.style.setProperty("width", `calc(100% / ${rowLenght})`);
        containerElement.insertAdjacentElement("beforeend", cell);
        
        const cellBombs = [];
        for (let j = 0; j < bombs.length; j++) {
            if (bombs.includes(Number(cell.innerHTML))) {
                cellBombs.push(cell);
                console.log(cellBombs);
            }
        }
        console.log(cellBombs);
        /* In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. */
        cell.addEventListener("click", function () {
            if (!bombs.includes(Number(cell.innerHTML))) {
                cell.classList.add("light_blue");
                console.log(cell.innerText);
            } else {
                cell.classList.add("red");
                console.log(cell.innerText);
            }
        })
    }
}
);

// se la partita termina allora tutte le celle che contengono bomb si colorano di rosso


/* 
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */


//Functions
/**
 * 
 * @param {number} num un numero intero
 * @returns {Element} dom element
 */
function divGenerator(num) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.insertAdjacentText("beforeend", num);
    return cellElement;
}

function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


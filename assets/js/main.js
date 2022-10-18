/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

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
generateElement.addEventListener("click", gridGen);

//funzioni

function divGenerator (num){
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.insertAdjacentText("beforeend", num);
    return cellElement;
}

function gridGen(){
    containerElement.innerHTML= "";
    const level = levelEl.value;
    let maxCellsNumb;
    if(level == "1"){
        maxCellsNumb = 100;
    } else if(level == "2"){
        maxCellsNumb = 81;
    } else {
        maxCellsNumb = 49;
    }
    let rowLenght= Math.sqrt(maxCellsNumb);
    for (let i = 0; i< maxCellsNumb; i++){
        const cell = divGenerator(i + 1);
        cell.style.setProperty("width", `calc(100% / ${rowLenght})`);
        containerElement.insertAdjacentElement("beforeend", cell);
        cell.addEventListener("click", function(){
            cell.classList.toggle("light_blue")      
            console.log(cell.innerHTML);
        })
    }
}
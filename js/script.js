/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari,
di verde se dispari. Inoltre emette un messaggio in console con il numero della cella cliccata.
*/

// Recupero l'elemento pulsante dal HTML
const button = document.getElementById("play");

// Aggiungo l'evento al pulsante button
button.addEventListener("click", function(){
    const MAX_CELL = 100;

    // Recupero l'elemento "grid" dall'HTML
    const grid = document.getElementById("grid");
    
    grid.innerHTML = "";

    // Creo l'elemento "cell", ciclandolo 100 volte
    for(let i = 0; i < MAX_CELL; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = i + 1;
        grid.append(cell);
    }

});
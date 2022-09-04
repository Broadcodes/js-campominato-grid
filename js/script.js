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
button.addEventListener("click", () => {
    const MAX_CELL = 100;

    // Recupero l'elemento "grid" dall'HTML
    const grid = document.getElementById("grid");

    grid.innerHTML = "";

    // Creo l'elemento "cell", ciclandolo 100 volte
    for (let i = 1; i <= MAX_CELL; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = i;

        // Aggiungo l'evento sulla cella al click
        cell.addEventListener("click", () => {
            // Verifico la condizione numero pari o dispari per colorare la cella
            let isEven = isEvenOrOdd(i);

            if(isEven){
                cell.classList.add("aqua");
            } else {
                cell.classList.add("green");
            }

            // Visualizzo il messaggio in console della cella cliccata
            console.log(`La cella selezionata ha il numero: ${i}`);
        });

        grid.append(cell);
    }

});

function isEvenOrOdd(index){
    if (index % 2 === 0) {
        return true;
    }
    return false;
}
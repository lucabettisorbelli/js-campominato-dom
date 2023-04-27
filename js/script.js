let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden"); // griglia invisibile di default

bottone.addEventListener("click", function () {

    griglia.innerHTML = ""; // rimuove elementi

    const select = document.getElementById("select");

    const numeroCelle = select.value; // numero celle = valore select

    creaGriglia(numeroCelle);

    griglia.classList.toggle("hidden");

    // creare 16 numeri random da 1 a 100 tutti diversi
    function creaNumeroRandom(min, max) {
        let arrayRandom = [];

        while (arrayRandom.length < 16) {

            let risultatoRandom = Math.floor(Math.random() * (max - min + 1) + min);

            if (!arrayRandom.includes(risultatoRandom)) {
            arrayRandom.push(risultatoRandom);
            }

        }

        return arrayRandom;
    }
    let numeroBombe = creaNumeroRandom(1, 100);
    console.log(numeroBombe);

    // associare bombe(n) a numero in tabella
    
    // scorrere array casuale

    for(let i = 0; i < numeroBombe.length; i++) {
        let numeroCasuale = numeroBombe[i];

    // cella corrispondente

    // elemento span con classe "numero" uguale a numero casuale
    let cella = document.querySelector(`span[numero="${numeroCasuale}"]`);

    //se la cella contiene bomba colora di rosso

    if (cella) {
        cella.classList.add("alarm");
        console.log(cella);
    }
    }

});


function creaGriglia(numeroCelle) {
    for (let i = 1; i <= numeroCelle; i++) {
        // nuova casella
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square");

        // dimensioni per numerCelle
        let radiceCelle = Math.sqrt(numeroCelle);
        nuovoDiv.style.width = `calc(100% / ${radiceCelle})`;
        nuovoDiv.style.height = `calc(100% / ${radiceCelle})`;

        // elemento numerico in casella
        const nuovoSpan = document.createElement("span");
        nuovoSpan.innerText = i;

        // imposta attributo a "nuovoSpan"
        nuovoSpan.setAttribute("numero", i);
        nuovoDiv.appendChild(nuovoSpan);

        nuovoDiv.addEventListener("click", function () {
            // se l'elemento contiene "clicked"
            if (!this.classList.contains("clicked")) {
                console.log(this.innerText);
            }
            // toggle = (add-remove)
            this.classList.toggle("clicked");
        });

        griglia.appendChild(nuovoDiv);

    }
};







// termina partita quando il giocatore clicca su una bomba o se finisce le celle vuote, comunicare punteggio



let bottone = document.getElementById("bottone");
const griglia = document.getElementById("grid");
griglia.classList.add("hidden"); // griglia invisibile di default
// costanti per messaggio e punteggio
const messaggio = document.createElement("p");
const punteggio = document.createElement("p");
document.body.appendChild(messaggio);
document.body.appendChild(punteggio);


bottone.addEventListener("click", function () {

    // stinghe vuote al click
    messaggio.innerHTML= "";
    punteggio.innerHTML= "";

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

    let conteggio = 0;

    griglia.addEventListener("click", function (event) {

        // event.target assegna alla variabile il valore dell'evento
        let cellaCliccata = event.target;
        console.log('cellacliccata', cellaCliccata)
        // assegna alla variabile il contenuto della cella
        let numeroCasuale = cellaCliccata.innerText;
        console.log('numerocasuale', numeroCasuale)
        // se numeroBombe include il contenuto cliccato, aggiungi o rimuovi le classi
        if (numeroBombe.includes(parseInt(numeroCasuale))) {
            console.log("hai perso");

            messaggio.innerText = "hai perso!";
            messaggio.style.textAlign = "center";

            punteggio.innerText = `il tuo punteggio è ${conteggio}`;
            punteggio.style.textAlign = "center";
            
            cellaCliccata.classList.add("alarm");
            cellaCliccata.classList.remove("clicked");
        } else {
            conteggio++;
        }
    });
}

);

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











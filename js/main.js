/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */




// creazione 5 numeri randomici unici
let numeriDom = document.getElementById('numeri')
let listaNumeriRandomUnivoci = []; 
for(let i = 0; i < 5; i++){
    let numeroGenerato = generateUniqueRandomNumber(listaNumeriRandomUnivoci, 1, 100);
    listaNumeriRandomUnivoci.push(numeroGenerato);
    console.log(i);
    numeriDom.innerHTML = listaNumeriRandomUnivoci



}

for (let i = 0; i < 5; i++){
    
    console.log(listaNumeriRandomUnivoci[i]);



}

// funzione che genra 5 numeri casuali unici
function generateUniqueRandomNumber(numsBlacklist, min, max){

    let check = false;
    let randomInt;

    while (!check){
        randomInt = Math.floor(Math.random() * ((max + 1) - min) + min);

        if (!numsBlacklist.includes(randomInt)) {
            check = true;
        }
    }
    return randomInt
}

//

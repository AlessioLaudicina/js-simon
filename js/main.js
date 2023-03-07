/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */




// creazione 5 numeri randomici unici
const numeriDom = document.getElementById('numeri');
let listaNumeriRandomUnivoci = []; 
for(let i = 0; i < 5; i++){
    let numeroGenerato = generateUniqueRandomNumber(listaNumeriRandomUnivoci, 1, 100);
    listaNumeriRandomUnivoci.push(numeroGenerato);
    
    numeriDom.innerHTML = listaNumeriRandomUnivoci




}
// scomparsa numeri da memorizzare dopo 30 sec
setTimeout(function(){
    numeriDom.innerHTML = "";
}, 30000)

setTimeout(function(){
     sceltaUtente = prompt('Inserisci il numero')
}, 31000)



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



// funzione per chiedere i 5 numeri all' utente








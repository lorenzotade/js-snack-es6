// creo array di stringhe
const arrStr = ['Pippo','PLUTO', 'PaPeRiNo', 'topolino','minnIE'];

// ciclo map() sulle stringhe dell'array
// dove le porto in minuscolo e chiamo
// la funzione per capitalizzare la prima
// lettera di ogni stringa
const arrMapped = arrStr.map((str) => {
  return capitalize(str);
});

// stampo in console il nuovo array
console.log(arrMapped)

/* FUNCTION */

// salvo in una variabile il primo carattere
// della stringa passata come lettera maiuscola.
// con slice salvo la stringa meno la prima lettera
// in una variabile e ritorno la prima lettera 
// capitalizzata + il resto della stringa
function capitalize(str) {
  let low = str.toLowerCase();
  let first = low.charAt(0).toUpperCase();
  let strSliced = low.slice(1, str.length)
  return first + strSliced;
}
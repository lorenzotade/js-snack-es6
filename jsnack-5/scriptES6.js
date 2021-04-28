/* 1- creo un array team per i giocatori */
/* 2- scrivo una funzione che prenda come parametri un targt e 
  una quantità */ 
/* 3- all'interno della funzione un ciclo for che gira tante volte
  quante la quantità decisa, mi crea un oggetto player con
  i valori generati random e li pusha nell'array */


/* FUNZIONI */

// creo arrow function per random number
const randomNumberGenerator = (max) => Math.floor(Math.random() * max)
// creo arrow function per id
const idGenerator = () => {
  const id = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 3; i++ ) {
    id.push(characters.charAt(randomNumberGenerator(characters.length - 1)));
    id.push(randomNumberGenerator(10));
  }
  return id.join('');
}

// creo arrow function per generare tanti giocatori quanti il limite
const getPlayer = (limit, target) => {
  for (let i = 0; i < limit; i++) {
    const player = {
      id: idGenerator(),
      points: randomNumberGenerator(50),
      success: randomNumberGenerator(100)
    }
    target.push(player);
  }
}

// inizializzo array vuoto
const team = [];

// chiamo la funzione per generare 10 giocatori nell'array team
getPlayer(10, team);
// mostro a video la squadra
console.log(team);
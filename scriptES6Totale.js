/* JSNACK 1 */

// array come costante
const arrZucchine = [
  {
    varietà: 'bella',
    peso: 1,
    lunghezza: 12
  },
  {
    varietà: 'lunga',
    peso: 1.2,
    lunghezza: 32
  },
  {
    varietà: 'pesante',
    peso: 4,
    lunghezza: 14
  },
  {
    varietà: 'gigante',
    peso: 3.2,
    lunghezza: 23
  },
  {
    varietà: 'verde',
    peso: .8,
    lunghezza: 22
  },
  {
    varietà: 'bella',
    peso: 1.4,
    lunghezza: 22
  },
  {
    varietà: 'gialla',
    peso: 1.8,
    lunghezza: 16
  },
  {
    varietà: 'oro',
    peso: 1.9,
    lunghezza: 13
  },
  {
    varietà: 'argento',
    peso: 2.3,
    lunghezza: 18
  },
  {
    varietà: 'bella',
    peso: 2.6,
    lunghezza: 17
  }
];

// inizializzo la variabile LET peso totale
let pesoTot = 0;

// con ciclo for..of sommo i valori di zucchina.peso
for (let zucchina of arrZucchine) {
  pesoTot += zucchina['peso'];
}
// mostro il totale a video
console.log('Peso totale: ' + pesoTot.toFixed(2));


/* JSNACK 2 */

// creo un array CONST e lo popolo di zucchine
const arrZucchine = [
  {
    varietà: 'bella',
    peso: 1,
    lunghezza: 12
  },
  {
    varietà: 'lunga',
    peso: 1.2,
    lunghezza: 8
  },
  {
    varietà: 'pesante',
    peso: 4,
    lunghezza: 14
  },
  {
    varietà: 'gigante',
    peso: 3.2,
    lunghezza: 23
  },
  {
    varietà: 'verde',
    peso: .8,
    lunghezza: 6
  },
  {
    varietà: 'bella',
    peso: 1.4,
    lunghezza: 22
  },
  {
    varietà: 'gialla',
    peso: 1.8,
    lunghezza: 16
  },
  {
    varietà: 'oro',
    peso: 1.9,
    lunghezza: 13
  },
  {
    varietà: 'argento',
    peso: 2.3,
    lunghezza: 18
  },
  {
    varietà: 'bella',
    peso: 2.6,
    lunghezza: 9
  }
];
// inizializzo i due array vuoti
const arrMeno = [];
const arrPiu = [];
// con un ciclo for..of sorto le zucchine in grandi e piccole in base al 
// valore di zucchina.lunghezza
/* 
  SOLUZIONE CORTA: DUE VARIABILI PESO E MENTRE PUSHA CONTROLLA E SOMMA I PESI
*/
for (zucchina of arrZucchine) {
  if (zucchina.lunghezza <= 15) {
    arrMeno.push(zucchina);
  } else {
    arrPiu.push(zucchina);
  }
}

// inizializzo la variabile peso totale
let pesoTot = 0;

// con ciclo for..of sommo i valori di zucc.peso nell'arrMeno
for (let zucchina of arrMeno) {
  pesoTot += zucchina.peso;
}
// stampo a video il totale
console.log(`Il peso totale delle zucchine piccole è: ${pesoTot} kg`);

// con ciclo for..of sommo i valori di zucc.peso nell'arrPiu
for (let zucchina of arrPiu) {
  pesoTot += zucchina.peso;
}
// stampo a video il totale
console.log(`Il peso totale delle zucchine grandi è: ${pesoTot}kg`);

/* JSNACK 4 */

// inizializzo tre array: due contenenti i valori e uno vuoto per il risultato
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'a','b'];
const arrTot = [];

// inizializzo una variabile contatore/indice
let i = 0;
// mentre i valori presenti nei due array sono diversi da undefined,
// continua a pushare i valori alternati e aumenta il contatore
while (arr1[i] != undefined && arr2[i] != undefined) {
  arrTot.push(arr1[i]);
  arrTot.push(arr2[i]);
  i++;
}
// stampo a video l'array risultato
console.log(arrTot);


/* JSNACK 5 */

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


/* JSNACK 6 */

/* FUNCTION */
  
// dichiaro array risultato e per i valori arr[i]
// compresi tra (a-1) e (b-1) ((forma umana))
// li pusho nell'arrResult
const splitArr = (arr, a, b) => {
  const arrResult = [];
  for (let i = (a-1); i < arr[b-1]; i++) {
    arrResult.push(arr[i]);
  }
  return arrResult;
}
  
// dichiaro array di numeri da 1 a 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(splitArr(arr, 4, 8));


/* JSNACK 7 */

/* FUNCTION */

const randomNumberGenerator = () => Math.floor(Math.random() * 100) 

// creo i due array con lunghezze diverse
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3];

// stampo a video gli array prima del ciclo
console.log(`Array n. 1: ${arr1}`);
console.log(`Array n. 2: ${arr2}`);
console.log(`===============`)

// mentre gli array hanno lunghezze diverse, pusho
// in quello più corto tanti numeri random da 1 a 100
while (arr1.length != arr2.length) {
  if (arr1.length < arr2.length) {
    arr1.push(randomNumberGenerator());
  } else {
    arr2.push(randomNumberGenerator());
  }
}
// stampo a video gli array dopo il ciclo
console.log(`Array n. 1: ${arr1}`);
console.log(`Array n. 2: ${arr2}`);
// creo un array di animali
const arrAnimali = [
  {
    nome: 'donnola',
    famiglia: 'mustelidae',
    classe: 'mammiferi'
  },
  {
    nome: 'urogallo',
    famiglia: 'phasianidae',
    classe: 'uccelli'
  },
  {
    nome: 'furetto',
    famiglia: 'mustelidae',
    classe: 'mammiferi'
  },
  {
    nome: 'falco',
    famiglia: 'falconidae',
    classe: 'uccelli'
  },
  {
    nome: 'gatto',
    famiglia: 'felidae',
    classe: 'mammiferi'
  }
];

// filtro l'array di animali prendendo solo quelli
// la cui proprietà 'classe' equivale a 'mammiferi'
// e li salvo in un nuovo array 
const arrMammiferi = arrAnimali.filter((animale) => animale.classe === 'mammiferi');

// stampo a video il nuovo array
console.log(arrMammiferi);
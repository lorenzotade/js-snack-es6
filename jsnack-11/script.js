// creo array di persone
const arrPeople = [
  {
    firstName: 'Mario',
    lastName: 'De Gatti',
    age: 32
  },
  {
    firstName: 'Luigi',
    lastName: 'De Luigis',
    age: 12
  },
  {
    firstName: 'Venanzio',
    lastName: 'Benatti',
    age: 86
  },
  {
    firstName: 'Augusto',
    lastName: 'De Filippi',
    age: 8
  },
  {
    firstName: 'Roberto',
    lastName: 'Tedeschi',
    age: 18
  }
];

// con ciclo map sull'array di persone scorporo
// l'oggetto persona e compio un controllo sulla 
// proprietà age: se è maggiore o uguale a 18,
// restituisco una stringa con template liberal dove
// si dice che la persona può guidare, altrimenti
// che non può guidare
const arrDrive = arrPeople.map((person) => {
  let {firstName, lastName, age} = person;
  if (age >= 18) {
    return `${firstName} ${lastName} può guidare.`
  } else {
    return `${firstName} ${lastName} non può guidare.`
  }
});

// stampo a video il nuovo array
console.log(arrDrive)
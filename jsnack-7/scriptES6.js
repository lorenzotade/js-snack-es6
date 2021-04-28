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
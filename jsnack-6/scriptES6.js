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
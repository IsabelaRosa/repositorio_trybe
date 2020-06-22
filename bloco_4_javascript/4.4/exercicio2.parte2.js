function maiorIndice (numbers) {
  let guardaIndice = 0;
  for (let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] > numbers[guardaIndice]) {
      guardaIndice = i;
    }
  }
  return guardaIndice;
}

console.log(maiorIndice([2, 86, 5, 23, 30]));
function menorIndice (numbers) {
  let guardaIndice = 0;
  for (let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] < numbers[guardaIndice]) {
      guardaIndice = i;
    }
  }
  return guardaIndice;
}

console.log(menorIndice([8, 3, 24, -2, 19]));

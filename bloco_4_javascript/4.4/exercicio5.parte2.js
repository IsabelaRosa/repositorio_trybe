function retornaModa (numbers) {
  let contaRepetido = 0;
  let comparador = 0;
  let numeroRepetido = 0;
  //for de fora que percorre o array
  for (let i = 0; i < numbers.length; i +=1){
    //for de dentro que percorre o array comparando-o à numbers[i]
    for (let j = 0; j < numbers.length; j +=1) {
      if (numbers[i] === numbers[j]) {
        //variavel que conta quantas vezes numbers[i] foi encontrado
        contaRepetido ++;
      }
    }
    //o comparador registra a maior quantidade de vezes que um número repetiu
    //e o numero repetido recebe o numero mais repetido para retornar ao fim da função
    if (contaRepetido > comparador) {
      comparador = contaRepetido;
      numeroRepetido = numbers[i];
    }
    contaRepetido = 0;
  }
  return numeroRepetido;
}

console.log(retornaModa([340, 11, 3, 4, 11, 340, 501, 340, 4, 340]));

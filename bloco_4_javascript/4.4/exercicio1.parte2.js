function verificaPalindromo (texto) {
  let novoTexto = texto.split('');
  let ehPalindromo = true;
  for (let index in novoTexto) {
    if (novoTexto[index] != texto[(texto.length -1) - index]) {
      ehPalindromo = false;
    }
  }
  return ehPalindromo;
}

console.log(verificaPalindromo('mirim'));
console.log(verificaPalindromo('botão'));


function verificaFimdaPalavra (palavra, fimPalavra) {
  let resultado = true;
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  //o método split() divide uma string em um array de substrings
  for (let i = 0; i < fimPalavra.length; i += 1) { 
    if (palavra[palavra.length - fimPalavra.length + i] != fimPalavra[i])
      resultado = false;
  }
  return resultado;
}

console.log(verificaFimdaPalavra('bola', 'bo'));
console.log(verificaFimdaPalavra('bola', 'la'));

/* A lógica do for é constrída baseada em analisar o índice do array palavra e do
array fimPalavra, fazendo uma subtração entre eles e adicionando o valor do iterador
para assim descobrir se o índice de palavra (que será o resultado dessa continha 
acima) corresponde à letra do array fimPalavra com o mesmo índice do iterador.
Caso sejam diferentes, a variável resultado recebe false. 

se o índice de palavra for diferente do indice de fimPalavra, retorna false
palavra.length = 4
fimPalavra = 2
4 - 2 + i != fimPalavra[i]
4 - 2 + 0 != fimPalavra[0]
palavra[2]l != fimPalavra[0]l
se l fosse != de l retornaria false
palavra = b[0], o[1], l[2], a[3]
fimPalavra = l[0], a[1]

4 - 2 + 1 != fimPalavra[1]
palavra[3]a =! fimPalavra[1]a
se a fosse != de a retornaria false
*/


function retornaFatorial (numero) {
  let fatorial = 0;
  for (let i = 1; i <= numero; i += 1) {
    fatorial = fatorial + i;
  }
  return fatorial;
}
//testando:
console.log(retornaFatorial(10));

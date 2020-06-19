function maiorNome (nomes) {
  let nome = nomes[0];
  for (let i = 0; i < nomes.length; i += 1) {
    if (nomes[i].length > nome.length) {
      nome = nomes[i];
    }
  }
  return nome;
}

console.log(maiorNome(['João', 'Lucas', 'Fernanda', 'Joana']));

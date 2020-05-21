let entrada = 5;

let linha = [];
for (let i = 0; i < entrada - 1; i+=1)
{
  linha += " ";    
}
  
linha += "*";
console.log(linha);

for (let j = 0; j < entrada - 1; j+=1)
{
  linha = linha.slice(1);
  linha += "*";
  console.log(linha);
}
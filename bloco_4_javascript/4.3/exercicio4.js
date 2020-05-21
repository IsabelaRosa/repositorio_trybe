let entrada = 11;

for (let j = 1; j <= entrada; j+=2)
{
  let linha = "";
  for (let i = ((entrada - j) / 2); i > 0; i-=1)
  {
    linha += " ";
  }
  
  for (let i = 0; i < j; i+=1)
  {
    linha += "*";
  }

  console.log(linha);
}
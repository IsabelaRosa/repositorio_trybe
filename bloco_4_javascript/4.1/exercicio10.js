let custoDoProduto = 100; valorDeVenda = 150; 
let lucro = 0; imposto = 0; montante = 0;

imposto = (custoDoProduto * 0.2);

lucro = (valorDeVenda - (custoDoProduto + imposto));

montante = (lucro * 1000);

if ((custoDoProduto < 0) || (valorDeVenda < 0))
  console.log("Valores não correspondentes ao esperado.");
else
  console.log(montante);

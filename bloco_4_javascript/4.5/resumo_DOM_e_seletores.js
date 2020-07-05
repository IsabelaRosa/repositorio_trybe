/* O DOM são as tags HTML, através do JS com eventos é possível acessar esses
elementos. Uma div com classe, id, etc. Através do window pode se acessar os
demais elemntentos, conforme sua hierarquia. o DOM é a estrutura que o navegador
monta quando lê a página do html, css e js. Lembrando que quem roda o JS é o
navegador

Modos de usar JS no arquivo HTML:

- tag <script></script> dentro da tag head, que será carregado/iniciado antes
mesmo do html, é útil quando há algo que precisa vir necessariamente antes.

- tag <script></script> dentro da tag body, no final dela, e será carregado ao
final do carregamento do arquivo html, sem atrapalhar a renderização das tags.

- chamando um arquivo externo, dentro da tag script passando um atributo "src" e
o endereço de onde está esse arquivo. ele será carregado aonde for chamado, pode
ser colocado em qualquer lugar sua tag que o chama.

- getElementById: acessa o elemento usando o id dele
  document.getElementById("id do elemento desejado");
  document.getElementById("id do elemento desejado").innerHTML; permite acessar o
  texto que está dentro do elemento, como uma div ou parágrafo por exemplo 

- getElementsByClassName: acessa uma classe específica, retorna uma coleção html
com a quantidade de itens que ela possui, retorna todos os elementos que possuirem
esta mesma classe em um array. para acessá-los individualmente:
document.getElementsByClassName("nome da classe")[índice do elemento];

- getElementsByTagName: acessa os elementos de uma tag específica de html e também
retorna um array com os elementos, que podem ser acessados através do seu índice
no array
document.getElementsByTagName("nome da tag")[indice do elemento];
document.getElementByTgaName("button")[0].innerHTML; permite acessar o valor do botão

- querySelector: é uma simplificação dos seletores de Id, ClassName e TagName, para
acessar os elementos, a sintaxe é igual ao CSS, para id usa #, para classe usa .
(ponto). muito útil quando se tem apenas um elemento por exemplo, pois acessa apenas
o primeiro elemento da lista.
document.querySelector("#id do elemento");
document.querySelector(".nome da classe");
document.querySelector("nome da tag");
document.querySelector("p.classeTeste"); acessa a classe que há no parágrafo, um
pseudo-element

- querySelecotrAll: seleciona todos os elementos, criando um node list, um array
de leitura é como se fosse um 'find'
document.querySelectorAll(".nome da classe"); retorna um array com todos os elementos
da classe
document.getElementById("classe pai").querySelectorAll(".classe filho"); acessa os
elementos que pertencem a classe filho que tem a classe pai como ponto em comum

NodeList: pode conter outros elementos como bloco de texto

HTMLColection: contém apenas elementos HTML

no DOM tudo é um nó, e todo nó é um objeto. o nome nó é genérico

elemento: tipo específico de nó, uma div, li, body, 

os seletores query por serem mais genéricos, em projetos grandes podem ser menos
eficientes na busca de um elemento do que usando os seletores espefíficos */
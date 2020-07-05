// parentNode: acessa o elemento pai de um elemento acessado, e retorna um NodeList:
document.queryselector(".classe de um elemento").parentNode; /* informa qual é o
elemento pai, e pode ser colocado mais de uma vez para acessar o pai do pai do
elemento, sendo possível acessar até a tag mãe de todas: '<html></html>' exemplo: */
document.querySelector(".classe de um elemento").parentNode.parentNode.parentNode...

/* mas ainda existem outras formas de navegar entre os elementos:

- parentNode: retorna o elemento pai
- childNodes: retorna um array com todos os elementos
- firstChild: retorna o primeiro filho
- lastChild: retorna o último filho
- nextSibling: retorna o próximo nó. (sibling = irmão)
- previousSibling: retorna o nó anterior
- nextElementSibling: retorna o próximo elemento
- previousElementSibling: retorna o elemento anterior

é importante considerar que nem sempre o próximo nó é um elemento, e por isso há
diferença entre nextSibling e nextEkementSibling, já que o primeiro pode retornar
qualquer tipo de texto, diferentemente do segundo */

// -creatElement: permite a criação de elementos HTML, tags, a partir do JS
  let parag = document.createElement("p"); //cria um parágrafo
  parag.innerHTML = "adiciona um texto ao parágrafo";
  
  let novaDiv = document.createElement("div"); //cria uma div
  
  let imagem = document.createElement("img");
  imagem.src="link de uma imagem" //criação de uma tag img e adição de um link com
  //o atributo src.

/*como adicionar esses elementos à estrutura HTML:

- appendChild: permite inserir um elemento dentro de outro, quando o elemento tem
de ser criado, primeiramente usa-se o creatElement, depois acessa-se o elemento
que receberá o novo elemento dentro dele, e usando .appendChild coloca o nome do
elemento que será acrescentado: */

let criaParag = document.createElement("nome da tag a ser criada");
criaParag.innerHTML = "acrescentando texto à tag";
document.getElementById("id da tag que receberá o novo elemento dentro").appendChild(nome da tag);

/* é importante relembrar que o ponto(.) se refere ao elemento anterior a ele, e
por isso não é possível usar 'document...appendChild().appendChild()' pois ele não
possui o recurso para adicionar um elemento dentro de um outro */

// -removeChild: remove o item do elemento filho. exemplo:

//criando as tags filhas usando appendChild:
let carro1 = document.createElement("p"); //cria um paráfrafo
carro1.innerHTML = "versa"; //texto que irá dentro do parágrafo

let carro2 = document.createElement("p"); //criando outro parágrafo
carro2.innerHTML = "sentra"; //texto do segundo parágrafo

document.getElementById("nissan").appendChild(carro1); /* adicionando a tag p carro1
à tag mãe que tem o id "nissan" */
document.getElementById("nissan").appendChild(carro2); //idem acima

//removendo as tags criadas acima usando removeChild:
document.getElementById("nissan").removeChild(carro1); //remove a primeira tag

/*
Existem dois modos de acessar o documento html completo através do JS:
- document.body: dá acesso ao corpo inteiro;
- document.documentElement: acessa o documento completo;
Caso use o alert nos dois casos por exemplo, o primeiro permite acesso as tags que
estão dentro de body, inclusive ela, já o segundo modo mostra todas as tags da página
*/


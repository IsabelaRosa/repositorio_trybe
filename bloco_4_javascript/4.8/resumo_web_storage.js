/* Web storage é um modo de aplicações web salvarem dados no browser dos usuários,
antes do HTML5 esses dados eram salvos em dados locais em cookies, que eram a cada
requisição do browser eram enviados ao servidor. Web Storage é mais seguro e tem uma
capacidade maior de armazenamento de dados frente aos cookies sem que isso afete o
desempenho da página e as informações não são transferidas para o servidor durante
a requisição.
Todas as páginas de uma mesma origem podem acessar e salvar os mesmos dados, por
exemplo: se o domínio betrybe.com salva o dado X no web storage, o domínio 
course.betrybe.com consegue ler este dado X.
As aplicações do web storage são várias, como: salavar os itens de um carrinho de
compras, retornar ao exato momento do vídeo em que se estava assistindo, manter
uma conta logada, e todas elas utilizam do browser para armazenas esses dados
localmente e assim facilitar a criação dessas funcionalidades.

-> Cookies: são dados salvos em pequenos arquivos de texto no computador do usuário
que utiliza a internet, pois quando o servidor envia a página web para o browser a
conexão é desligada e o servidor não tem acesso aos dados da pessoa, por isso os
cookies foram inventados, para poderem salvar os dados no próprio browser e 
"lembrar" do usuário quando o navegador faz uma solicitação de uma página web de
um servidor. Os cookies dessa página são adicionados à solicitação e assim o 
navegador obtém as informaçẽos para lembrar do usuário e ainda personalizar o acesso.
Eles são salvos em pares nome-valor.

O web storage html, salva os dados no browser do usuário de modo mais intuitivo do
que os cookies, também no formato chave-valor. Contudo o uso de cookies não se torna
dispensável, uma vez que ele ainda é usado quando é necessário ter os dados no
browser e no servidor ao mesmo tempo ou em sessões que têm um tempo determinado
a ficar aberto e encerrará depois deste período.


-> Local Storage: salva os dados sem data de expiração, estarão disponíveis até que
sejam explicitamente removidos, pois não somem quando o navegador é fechado.
*/
console.log(localStorage.length)
// não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firsname", "Adam")
//salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith")
//salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname"))
// retorna o valor "Smith"
console.log(localStorage.length)
// possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname")
// remove a entrada referente a key = "lastname"
console.log(localStorage.length)
// possui uma entrada, então o retorno é o valor: 1
localStorage.clear()
// limpa todas as entradas salvas em localStorage
console.log(localStorage.length)
// não possui nada salvo, então o retorno é o valor: 0

/* 
-> Session Storage: salva os dados temporariamente, pois serão excluídos assim que
o navegador/aba for fechado.
*/

console.log(sessionStorage.length)
// não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firsname", "Adam")
//salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith")
//salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname"))
// retorna o valor "Smith"
console.log(sessionStorage.length)
// possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname")
// remove a entrada referente a key = "lastname"
console.log(sessionStorage.length)
// possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear()
// limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length)
// não possui nada salvo, então o retorno é o valor: 0

/* Há quatro métodos usados em local e session storage:
- .setItem(): define um par chave valor;
- .getItem(): permite acessar o valor que está armazenado na chave que foi passada
ao método;
- .removeItem(): remove o item desejado ao passar a chave que se deseja remover;
- .clear(): remove todos os pares chave-valor; */

//É possível ainda salvar outras estruturas em localStorage e sessionStorage:

let organization = {
  name: "trybe",
  since: 2019
}
// object "storage" can be localStorage or sessionStorage
storage.setItem("trybe", JSON.stringify(organization))
let org = JSON.parse(storage.getItem("trybe"))
console.log(org) // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"]
storage.setItem("classes", JSON.stringify(classes))
let cls = JSON.parse(storage.getItem("classes"))
console.log(cls) // ["2019/set", "2019/oct"]

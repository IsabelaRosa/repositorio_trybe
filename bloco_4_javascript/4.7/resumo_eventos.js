/* Os eventos são usados para que as funções sejam executadas quando alguém as usar
ou quando o navegador fizer alguma interação com a página web. Praticamente toda a
interação de quem usa uma página pode ser considerada um evento: rolar da tela,
passar o mouse por um elemento, clicar, digitar, etc. Para que sejam possíveis
essas interações, os códigod JS precisam de utilizarem escutadores de eventos, os
event listeners, que ficam esperando que um evento específico ocorra, como um click,
e quando ocorrer ele executará a função pré-determinada por quem programou a página.
Lembrando que todas essas interações de usuário se dão na interface da aplicação,
ou seja, diretamente na parte HTML do código e que será percebida pelo javascript,
e ainda que todos os elementos podem receber eventos e quantos eventos forem preciso
em um mesmo elemento.

-> onload: evento que sabe quando a página foi definitivamente carrregada, após
perceber o carregamento da página, qualquer ação pode ser tomada, como exibir uma
caixa de alerta avisando o carregamento por exemplo
- window: variável global do JS, do browser, todos têm acesso, e ela tem o evento
onload em que se pode colocar uma função a ser executada como citado acima.
Importante ressaltar que os eventos não dependem da ordem em que são colocados no
código, mas sim das interações que acontecerem, 

-> addeventListener: função nativa do JS, e é um jeito bem comum usado para criar
um escutador de eventos em um elemento. Ela pode receber dois parâmetros: 
  - evento esperado, a ser escutado, como click, change, mouseover, escrito em
  forma de string
  - a função que será executada quando o evento acontecer, esta é criada por nós.
A primeira coisa a se fazer para se escutar um evento é resgatar o elemento, como
já estamos fazendo nos últimos dias. Em seguida atrelar um evento a esse elemento,
*/

//usando um botão previamente criado no html com id="btn":

let botao = document.getElementById("btn"); //resgatando o elemento
botao.addEventListener('click', function() {
  alert("Você clicou!");
}); /* aqui atrelando o botão ao evento de click, que quando acontecer exibirá o
alert com a mensagem definida */

//considerando um título com id="title":
let titulo = document.getElementById("title"); //resgatando o elemento
titulo.addEventListener("click", function () {
  titulo.remove();
}); /* aqui, quando o botão for clicado, o título será removido*/

/* PROPRIEDADES INNERWIDTH E INNERHEIGHT:

São propriedades que retornam o tamanho interno do conteúdo de uma janela em
pixels, elas são a largura e a aultura respectivamente. */

let larguraConteudo = window.innerWidth;
let alturaConteudo = window.innerHeight;

// PARA OBTER OS DADOS DE TODA TELA HÁ A PRIPRIEDADE OUTER (externo):

let larguraTela = window.outerWidth;
let alturaTela = window.outerHeight;

/* MÉTODO setTimeout() e clearTimeout():

Este método recebe dois parâmetros: o primeiro é a função que será executada, o
segundo é o tempo em milissegundos que irá demorar para executar a primeira função,
ou seja, o setTimeout determina um intervalo de tempo a ser aguardado até que a 
função seja de fato chamada. E pode ser cancelada, usando o método clearTimeout().

No exemplo abaixo, o botão após ser clicado aguardará 3 segundos e exibirá na tela
um alert com a mensagem. Mas poderá ter esse intervalo interrompido e a execução da
função cancelada se o segundo botão for clicado antes do intervalo estipulado. */

<button onclick="setTimeout(myFunction, 3000)">Try it</button>
<button onclick="clearTimeout(myVar)">Stop it</button>
<script>
function myFunction() {
  alert('Hello');
}
</script>

/* MÈTODO setInterval() e clearInterval():

Este método também recebe dois parâmetros: o primeiro corresponde à função que será
executada e o segundo a duração do intervalo de tempo entre cada execução, ou seja,
o setInterval executa a função chamada a cada vez que o intervalo de tempo estipulado
seja atingido, repetindo-a até que seja interrompida com o método clearInterval() por
exemplo. 

Neste exemplo a seguir a função contará os segundos como um relógio, será executada
a cada intervalo de 1 segundo e poderá ser parada ao clicar no botão 'Stop time' */

<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>

/* EVENTO oninput:

Ocorre imediatamente depois de feita uma alteração em uma input ou textarea, e pode
ser configurado em forma de alerta por exemplo, ou ainda imprimir na tela o texto
que está sendo digitado naquele exato instante ou então mostrar o valor de um aumento
ou diminuição de volume por exemplo. */
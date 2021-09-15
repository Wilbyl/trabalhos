/*Crie um jogo de ficção interativa que simule a rotina diária de um personagem.
Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de
estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu
personagem e o conduza durante o seu dia.
Cada escolha irá gerar uma consequência diferente para o seu personagem. O
jogo acaba quando o dia do seu personagem acabar. Você será responsável por
determinar o inicio e término do dia do seu personagem, além de avançar o
tempo a cada escolha.
É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for)
e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
Use toda sua criatividade para desenvolver uma história interessante e seja bem
específico com relação as escolhas que precisam ser feitas, para que seu jogo
seja divertido!*/
const prompt = require("prompt-sync")();

var f1 = 5;
var f2 = 7;
var f3 = 8;
var f4 = 10;
var f5 = 10;
var contador = 0;
function gerador(tamanho) {
  var stringAleatoria = "";
  var caracteres = "asd123";
  for (var i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return stringAleatoria;
}

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
console.clear();
console.log(`*******************************************************************************
******Bem vindo a historia que pode mudar um pouco sua forma de ver o mundo****
******************************************************************************* `);
sleep(2000);
console.clear();
console.log(
  "\nNão era de costume dele, mas nessa manhã, Dylan resolveu fazer uma caminhada pela praça e pensar sobre seus problemas."
);
sleep(2000);
console.clear();

console.log("\nChegando lá, se sentou em um banco e se perguntou porque sua vida era tão difícil. Porque ele não conseguia se dar bem com seus pais? Porque todos os seus colegas da escola implicavam com ele? Porque ele simplesmente não conseguia ser feliz e viver uma vida tranquila? ")
sleep(4000);
console.clear();


console.log("\nFoi quando ele pensou que talvez seu lugar não fosse ali, que ao lado dele se sentou um senhor. Ele era baixo, de aparência ruim, mas com um belo sorriso ele perguntou.");
sleep(3000);
console.clear();



console.log("\n- Filho, você quer saber a solução para a sua vida? Pegue esta moeda. - ele estendeu a mão e nela tinha uma pequena moeda quadrada de cobre.");
sleep(2000);
console.clear();



console.log("Dylan sem pensar duas vezes pegou a moeda, e então tudo ao seu redor escureceu");
sleep(2000);
console.clear();

console.log("\n Assim que seus olhos recuperaram a luz, Dylan teve o vislumbre de uma linda floresta, ele se levantou e deu uma olhada ao derredor. Ele estava cada vez mais encantado, quando de repente uma flecha passa de raspão pelo seu braço. ");
sleep(3000);
console.clear();

console.log("\nQuando ele se virou, viu uma criatura humanoide, ele era todo azul, com partes verdes e algo esbranquiçado corria pelo seu corpo, se aquela criatura fosse um pouco mais redonda ele poderia afirmar que o planeta Terra estava bem em sua frente.");
sleep(3000);
console.clear();




console.log("A criatura saiu correndo em direção a Dylan e se ele não tivesse se esquivando teria recebido um soco, mais um soco foi desferido e dessa vez o acertou em sua barriga. ");
sleep(2000);
console.clear();


console.log("Ele cai de frente se perguntando porque aquilo estava acontecendo, e quando ele se deu conta, em sua cintura havia uma espada, ele a pegou e partiu pra cima da criatura.");
sleep(2000);
console.clear();


console.log("");
sleep(2000);
console.clear();

 
    class Inimigo {
        constructor(nome,duracao){
            this.nome = (nome);
            this.duracao = (duracao);
        }
      }
      
      class Goblin extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 5;
            this.status = 5;
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let goblin = new Goblin("Goblin", 5);
    
      goblin.dados();
      
      
      class Elfo extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 8;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let elfo = new Elfo("Elfo",8 );

      class Orc extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 12;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let orc = new Orc("Orc",12 );
    

      class Cerbero extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 16;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let cerbero = new Cerbero("Cerbero",16 );

        
      class Boss extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 18;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let boss = new Boss("Orc",18 );
      
        goblin.dados();
        elfo.dados();
        orc.dados();
        cerbero.dados();
        boss.dados();

        sleep(5000);
        console.clear();
do {
  um();
  function um() {
    for (var i = 0; i < f1; i++) {
      var goblin1 = gerador(5);
      console.log("memorize o codigo a baixo ");
      console.log(goblin1);
      sleep(4000);
      console.clear();
      console.log();
      let jogador = prompt("Digite a sequência anterior:");

      if (goblin1 == jogador) {
        console.clear();
        contador++;
        console.log("Acertou!!");
      } else if (goblin1 != jogador) {
        console.clear();
        console.log("perdeu");
      }
    }
    if (contador >= 4) {
console.log('Dylan enfraquece a criatura que já está a beira da morte e o pergunta "porque está fazendo isso?" e ela responde "está é a minha natureza, eu represento seu mundo e sou guiado pelo Espírito dos humanos, eles não precisam de nenhum motivo para te atacar ou tentar acabar com você, então eu não tenho nenhum motivo certo" e então a criatura desaparece.');
sleep(4000);
console.clear();

console.log("Dylan ainda assustado avista um rio a sua frente, ele vai até lá para beber um pouco de água e se senta em uma pedra para refletir sobre o que acabara de acontecer");
sleep(2000);
console.clear();

console.log(". Foi quando ele começou a ouvir uma voz doce ecoando em seus ouvidos, ele olhou a sua volta e não conseguiu ver nada, olhou novamente para o rio e lá havia uma sereia muito bonita, sua calda era azul celeste com as pontas vermelhas rubi, sua pele negra brilhava como a lua e seus cabelos desciam em ondas até metade de sua calda. Ela cantava cada vez mais alto, mas tinha em seu rosto uma expressão de dúvida. ");
sleep(4000);
console.clear();

console.log("Dylan se perguntou se ele morreria ali, já que em todas as histórias de sereias elas aparecem para seduzir e matar os homens. ");
sleep(2000);
console.clear();

console.log("A cada nota que saía da boca dela, ela ia mudando sua expressão de dúvida para raiva, e quanto mais sua raiva ia aumentando, sua calda ia escurecendo e ficando azul, assim como seus belos cabelos iam se arrepiando, como se a sua volta não houvesse gravidade");
sleep(3000);
console.clear();

console.log('. A sereia chegou a um estado tão grave, que ele parou de ouvir sua bela canção e então ela berrou "porque não se apaixona por mim?"');
sleep(2000);
console.clear();

console.log("A água em volta dela começa a flutuar e as gotas de transformam em lanças que começam a atacar Dylan, ele se esquiva das três primeiras e por instinto joga sua espada na direção da sereia que se joga no rio. ");
sleep(3000);
console.clear();

console.log("Sem que ele entenda, sua espada retorna a sua mão e dessa vez a sereia volta para a pedra com ainda mais raiva. ");
sleep(2000);
console.clear();

console.log('A espada de Dylan corta o cabelo da sereia, e então ela começa a chorar e gritar "você tem problema? Todos os homens se apaixonam por mim, por acaso você não é homem?" e volta para o fundo do rio.');
sleep(3000);
console.clear();
      dois();
    }
  }

  contado = 0;
  function dois() {
    for (var i = 0; i < f2; i++) {
      var elfo1 = gerador(6);
      console.log("memorize o codigo a baixo ");
      console.log(elfo1);
      sleep(3000);
      console.clear();
      console.log();
      let jogador = prompt("Digite a sequência anterior:");

      if (elfo1 == jogador) {
        console.log("Acertou!!");
        contador++;
        console.clear();
      } else if (elfo1 != jogador) {
        console.log("perdeu");

        console.clear();
      }
    }
    if (contador >= 6) {
      tres();
    }
  }

  function tres() {
    for (var i = 0; i < f3; i++) {
      var orc1 = gerador(6);
      console.log("memorize o codigo a baixo ");
      console.log(orc1);
      sleep(2000);
      console.clear();
      console.log();
      let jogador = prompt("Digite a sequência anterior:");

      if (orc1 == jogador) {
        console.log("Acertou!!");
        contador++;
        console.clear();
      } else if (orc1 != jogador) {
        console.log("perdeu");

        console.clear();
      }
    }
    if (contador >= 6) {
      quatro();
    }
  }

  function quatro() {
    for (var i = 0; i < f4; i++) {
      var cebero1 = gerador(6);
      console.log("memorize o codigo a baixo ");
      console.log(cebero1);
      sleep(3000);
      console.clear();
      console.log();
      let jogador = prompt("Digite a sequência anterior:");

      if (cebero1 == jogador) {
        console.log("Acertou!!");
        contador++;
        console.clear();
      } else if (cebero1 != jogador) {
        console.log("perdeu");

        console.clear();
      }
    }
    if (contador >= 6) {
      console.log("conseguiu");
    }
  }

  function cinco() {
    for (var i = 0; i < f5; i++) {
      var boss1 = gerador(6);
      console.log("memorize o codigo a baixo ");
      console.log(boss1);
      sleep(3000);
      console.clear();
      console.log();
      let jogador = prompt("Digite a sequência anterior:");

      if (boss1 == jogador) {
        console.log("Acertou!!");
        contador++;
        console.clear();
      } else if (boss1 != jogador) {
        console.log("perdeu");
        contador--;
        console.clear();
      }
    }
    if (contador >= 6) {
      console.log("conseguiu");
    }
  }

  console.log("GAMO OVER");
  var perg = prompt("Dylan morre e retorna à praça. O senhor ao seu lado balança a cabeça e pergunta quer tentar novamente? [S/N]");
} while (perg == "S" || perg == "s");

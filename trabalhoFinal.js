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

const  prompt=require("prompt-sync")();


 console.log("***************Bem vindo ao game do Soren***************");
 console.log("****************************************************************");
 console.log("é uma simples e custa historia, você precisa ganha cada monstro ate chegar no Boss...");
 console.log("****************************************************************");
 console.log("Você tem apenas uma vida ,mas a cada nv vc ganha status pra ganhar o proximo monstro.");
 console.log("****************************************************************"); 
 console.log("**************************Boa sorte***************************");
 console.log("****************************************************************");
console.log();
console.log();
console.log();
console.log("preparar");
console.log("vai");
    
do{ var perg = prompt("quer jogar?[S/N] ");
var aleatorio = [1, 2, 3];
var computador = aleatorio[Math.floor(Math.random() * aleatorio.length)];


var jogador= prompt("escolha um numero: ");

console.log(computador);

if(computador == jogador){
    console.log("ganhou");
}else if(computador != jogador){
    console.log("perdeu");
}


} while ( perg == "S" || perg =="s" );
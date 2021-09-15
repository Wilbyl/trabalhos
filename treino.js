const prompt = require("prompt-sync")();
/*
let v1= prompt ("digite seu numero:");

let lista =[v1];
for(corre of lista ){
    console.log (`lista de numeros ${corre}`)
}

function sleep (ms) {
    return new Promise (resolve => setTimeout (resolve,ms));
}
async function demo(){
    console.log("Espere...");
    await sleep (2000);
    console.clear();

// sloop em loop

for (let i=0 ; i<=10 ; i++){
    if (i ===3 )
     await sleep(2000);
    console.log(i); 
 }
}
demo(); 
*/
/*
var aleatorio = [1, 2, 3]; // usar um while tru pra poder ger um contador de acerto e usar um if pra dizer que o usuario tiver um numero x de acerto ele parar.
var computador = aleatorio[Math.floor(Math.random() * aleatorio.length)];

//
function sleep (ms) {
    return new Promise (resolve => setTimeout (resolve,ms));
}
async function demo(){
    await sleep (2000);
    console.log(computador);
    let nome= prompt("insira o numero que vera a seguir:");
    
// sloop em loop

for (let i=0 ; i<=2 ; i++){
    if (computador === nome ){
     await sleep(2000);
    console.log(i);
    break;
}else if(computador != nome){
 console.log("perdeu");
}
 }
  }
demo();
*/

/*
console.log("ola mundo\n") ; 
setTimeout(function() { console.clear(); },4000);

console.log( "cabeça") ; 
setTimeout(function() { console.clear(); },5000);
*/

/*
console.log("Inicio da sua historia aqui:");

let first = +prompt("primeira escolha do jogo aqui 1 ou 2:");

if(first === 1){
  passagem1();
}else{
  passagem2
}

function passagem1(){
  console.log("oque aconteceu apos a primeira escolha aqui:");
  //outras coisas aqui
  let second = prompt("outra opção aqui:");
  if (second === 1){
    loop1();
  }else{
    loop2();
  }
}

function passagem2(){
  console.log("oque aconteceu apos a primeira escolha aqui:");
  //outras coisas aqui
  let pass2 = prompt("outra opção aqui:");
  if(pass2 === 1){
    conse1();
  }else{
    conse2();
  }
}

let b = 2;

  function loop1(){
    console.log("tarefa para sair do looping:");
    let loss = +prompt("pedira tarefas aqui:");
    if(loss < b){
      return loss
    }
  }

  if(loop1() < b){
    loop1();
  }

  function loop2(){
    console.log("tarefa para sair do looping:");
    let loss2 = +prompt("pedira tarefas aqui:");
    if (loss === "tarefa exigida"){
      return loss2

    }
  }

if(loop2() < b){
    loop2();
  }
  */

  /*
setTimeout(() => { console.clear(); 
console.log(`Ao avistarmos o castelo nosso corpo é tomado de uma grande sensação de aventura. 
O que este lugar nos reserva?`);

console.log(); },
4 * 1000
);
*/
/*process.stdin.on('keypress', (str, key) => {

  if (key.name === 'c') {
    console.log(`You pressed the "${str}" key`);
  }
});*/


// usar uma funçao que faca um texto aleatorio,depois de um certo tempo o texto some e a pessoa precisa fazer o texto igual ,quando ele ganhar vai para o proximo oponente ,mas antes ele vai exibir mais uma parte da historia

/*
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
 class Inimigo {
  constructor(nome){
      this.nome = (nome);
  }
}

class Goblin extends Inimigo{
  constructor(nome,forca){ 
      super(nome);

      this.forca = forca;
      this.espada = false;
  }

  dados(){
      console.log(`
      O inimigo ${this.nome} tem:
      Força: ${this.forca}
      Espada: ${this.espada}
      `);
  }

  pegaespada(){
      this.espada = true;
      console.log("Você pegou a espada!!!");
  }
}
let goblin = new Goblin("Goblin", 100);

goblin.dados();

goblin.pegaespada();

goblin.dados();*/



let contador = 0;

function um(){
  let perg1 = prompt("vc quer comer?");
  if(perg1 === "sim"){
    dois();
  }else{
    tres();
  }
}
function dois(){
  console.log("muito bem, que tal comer mais?");
contador++;
tres();
}
function tres(){
  if(contador < 5){
    console.log("Você precisa comer mais");
    um();
  }else if(contador > 4){
    exit();
  }
}

function exit(){
  console.log("Voce esta de barriga cheia, continue sua aventura");
}

um()


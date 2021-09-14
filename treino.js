const prompt = require("prompt-sync")();

/*let v1= prompt ("digite seu numero:");

let lista =[v1];
for(corre of lista ){
    console.log (`lista de numeros ${corre}`)
}
*/
/*function sleep (ms) {
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
demo(); */

/*
var aleatorio = [1, 2, 3]; // usar um whie tru pra poder ger um contador de acerto e usar um if pra dizer que o usuario tiver um numero x de acerto ele parar.
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

for (let i=0 ; i<=5 ; i++){
    if (computador === nome ){
     await sleep(2000);
    console.log(i);
    break;
}else if(computador != nome){
 console.log("perdeu");
}
 }
  }
demo();*/

/*console.log("ola mundo\n") ; 
setTimeout(function() { console.clear(); },4000);

console.log( "cabeça") ; 
setTimeout(function() { console.clear(); },5000);*/


/*console.log("Inicio da sua historia aqui:");

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
  }*/
  
setTimeout(() => { console.log("ola"); }, 2000);
setTimeout(() => { console.log("tudo bem"); }, 4000);
setTimeout(() => { console.log("vamos brincar"); }, 6000);
setTimeout(() => { console.log("nao me conhece "); }, 8000);
setTimeout(() => { console.log("sou seu amigo"); }, 10000);
setTimeout(() => { console.clear(); }, 12000);
setTimeout(() => { console.log("vim te ver"); }, 14000);
setTimeout(() => { console.log("olhe para traz"); }, 16000);
setTimeout(() => { console.log("nao esta me vendo"); }, 18000);
setTimeout(() => { console.log("vou mecher na cama  "); }, 20000);
setTimeout(() => { console.log("olha só"); }, 22000);
setTimeout(() => { console.clear(); }, 24000);
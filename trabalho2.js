//segundo trabalho "jokenpô"
const prompt = require("prompt-sync")();

console.log("******Bem vindo ao game jokenpô******");
console.log();
console.log("========='REGRAS'=========");
console.log();
console.log("escolha '0' para 'pedras' ","escolhas '1' para 'papel' ","escolha '2' para 'tesolra' ");
console.log();

var GO = "S";

var w1=0;
var l1=0;

function reset (){
w1 =0;
l1=0;
}

while (GO==="S" || GO==="s" ){
   reset();
  
    var v1 = prompt("Digite quantas rodadas deseja jogar:");
    
    
  do{

    for(var i=0 ; i < v1; i++ ){
     
    var v2 = +prompt("Escolha '0' '1' '2':");

    var aleatorio = [0, 1, 2];
    var computador = aleatorio[Math.floor(Math.random() * aleatorio.length)];

   console.log(computador);
 
    if  ( computador === 2 && v2===1){l1= l1+1
    console.log("Você perdeu");  
    }else if (v2 === 0 && computador ===2 ){w1=w1+1
    console.log ("Você ganhou");
    } else if (v2 === 1 && computador===0){w1=w1+1
    console.log("Você ganhou");
    }else if (v2 === 2 && computador===1){w1=w1+1
    console.log("Você ganhou");
    }else if (computador === 0 && v2 ===2 ){l1=l1+1
    console.log ("Você perdeu");
    } else if (computador === 1 && v2===0){l1= l1+1
    console.log("Você perdeu");
    }else { computador === v2;
    console.log("Empate");
    }
   
    --v1
    console.log(v1);
    
    }

    console.log ("====================================================================================");
    if (w1>l1){ console.log("***Venceder***");
    }else if(w1<l1) {console.log("===Perderdor===")}
    else console.log("+++Empate+++");
    ;
      
  
  } while (v1>0)
  if(w1>l1){ 
      console.log("Quero revanche");
  } else if (w1<l1) { 
      console.log("Vai virar fregues?");
  } else console.log("Vamos pra melhor de 3 ?");
  console.log()
    GO = prompt("Quer jogar de novo ?[S/N]")

}if (GO==="N" || GO==="n")
{console.log("Até a proxima")};
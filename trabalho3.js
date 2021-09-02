const  prompt=require("prompt-sync")()

//trabalho de Dice Game

function reset (){
    w1 =0;
    l1=0;
    }
var GO = "S"
while (GO==="S" || GO==="s" ){
    reset();

     var v1 = prompt("Digite quantas rodadas deseja jogar:");
     var jg = prompt("Quantos jogadores:");
     
     
     do{ for(var i=0 ; i < v1; i++ )

     
     let list ={
         nome:prompt("digite seu nome:"),
         numero:prompt("numero:")
     };

    

    do{    
        for(var w=0 ; w < jg; w++ );
    
        var v3 = +prompt("Escolha '6' '1' '2' '3' '4' '5' ");
        var aleatorio = [6,1, 2,3,4,5];
        var computador = aleatorio[Math.floor(Math.random() * aleatorio.length)];


        




        console.log(game.sort(function(a, b) {
            return +(a.diceNum - b.diceNum) && +(a.round - b.round) - 1;
          }));
    
    }while (jg>0);
     --v1
    }while(v1>0);

}if (GO==="N" || GO==="n")
{console.log("Até a proxima")};
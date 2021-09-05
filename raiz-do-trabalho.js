const  prompt=require("prompt-sync")()

//trabalho de Dice Game
/*• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)*/



function reset (){
    w1 =0;
    l1=0;
    }
var GO = "S"
while (GO==="S" || GO==="s" ){
    reset();

     var v1 = +prompt("Digite quantas rodadas deseja jogar:");
     var jg = +prompt("Quantos jogadores:");
     var lista=[];
     
    for(var i=0 ; i < jg; i++ )

     
     
    
    lista.push(jg)//aqui vc armazena tudo que esta dentro da lista
    

    

    do{    
        for(var w=0 ; w < jg; w++ );
    
        var v3 = +prompt("Escolha '6' '1' '2' '3' '4' '5': ");
        var dado = [6,1,2,3,4,5];
        var dado = dado[Math.floor(Math.random() * dado.length)];

        function random(){
            return Math.floor(Math.random() * 6) + 1
            }

        lista.spete((a,b)=>{//pra determinar a ordem de ganhadores
            if(b.dado<a.dado){
                return-1
                }else{
                        return true
                    }
                }
        );

        let list ={
            nome:prompt("digite seu nome:"),
            dado:computador
        };


       
    }while (jg>0);
     --v1
    }while(v1>0);

if (GO==="N" || GO==="n")
{console.log("Até a proxima")};
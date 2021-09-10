/*Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação*/

 const  prompt=require("prompt-sync")();



 var v1 =0;

 do{
     let ano_us =+prompt("Digite ano de nascimento: ") 
    let voto=0;
    let autorizacao = "";

function autorizarVoto(anoNascimento){//aqui eu valido se a pessoa pode votar ou nao
    if(2021-anoNascimento <= 16){
        return negado;
    }else if (2021-anoNascimento >=17 || 2021-anoNascimento <=19){
        return opcional;
    }else if (obrigatorio);
};//usar essa saida pra confimar que posso volar



let vt1= prompt("em quem vc quer votar: ")




function votacao(autorizacao, voto) {//aqui declaro os votos. essa parte foi feita pela sha.
    if ( autorizacao === 'negado') {
        console.log('Voce ainda nao pode votar ,espera mais um pouco!!');
        console.log();//aqui eu vou gerar os pontos dos votos
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 1 ) {
        //colocar a somatoraia aqui
    } else if ( (autorizacao === 'opcional'||  autorizacao === 'obrigatorio') && voto == 2 ) {
        
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 3 ) {
        //colocar o nome da variavel que ganha o voto
    } else if ( (autorizacao === 'opcional'||  autorizacao === 'obrigatorio') && voto == 4 ) {
        
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 5 ) {
        
    }
}
 




console.log("amen");

var perg = prompt("Quer votar ?[S/N]")
 }while(perg == "S"|| perg == "s");

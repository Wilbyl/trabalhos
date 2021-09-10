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


console.log(` 
==================================================================
||||||||| Eleições pra saber qual animal e o mais querido.|||||||||
|||||||||||||||||| candidato: 1 = Gato       ||||||||||||||||||||||
|||||||||||||||||| candidato: 2 = Cachorro   ||||||||||||||||||||||
|||||||||||||||||| candidato: 3 = Furão      ||||||||||||||||||||||
|||||||||||||||||| nulo: 4 = Anular voto     ||||||||||||||||||||||
|||||||||||||||||| branco: 5 = branco        ||||||||||||||||||||||
================================================================== 
`
);



 var v1 =0;

 do{
     let anoNascimento =+prompt("Digite ano de nascimento: ") ;

    let autorizacao = "";

function autorizarVoto(anoNascimento){//aqui eu valido se a pessoa pode votar ou nao
    let idade = 2021 - anoNascimento;

    if(idade <= 16){
        return "negado";
    }else if ( idade <= 19 ){
        return "opcional";
    }else {
        return "obrigatorio"};
};//usar essa saida pra confimar que posso volar
let vt2 = autorizarVoto(anoNascimento);
    if(autorizacao != "negado"){
let voto= prompt("Em quem deseja votar: ");

let vt3 = votacao(vt2); 




function votacao (anoNascimento, voto) {//aqui declaro os votos. essa parte foi feita pela sha.

       if ( voto == 1 ) {
        gat++;     //colocar a somatoraia aqui
    } else if (voto == 2 ) {
        cach++;
    } else if ( voto == 3 ) {
        pass++;        //colocar o nome da variavel que ganha o voto
    } else if ( voto == 4 ) {
        nul++;
    } else if ( voto == 5 ) {
       branco++; 
    }

}
 
votacao (vt2,voto);


console.log("Amen");

var perg = prompt("Quer votar ?[S/N]");
}else{ 
    console.log('Voce ainda nao pode votar ,espera mais um pouco!!');
} 
}while(perg == "S"|| perg == "s");
 
 let gat = 0;
 let cach = 0;
 let pass = 0;
 let nul = 0;
 let branco = 0;

 console.log(branco);
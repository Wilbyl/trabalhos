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
     
function autorizarVoto(anoNascimento){//aqui eu valido se a pessoa pode votar ou nao
    if(2020-anoNascimento <= 16){
        return this.Negado;
    }else if (2020-anoNascimento >=17 || 2020-anoNascimento <=19){
        return this.opicional;
    }else if (this.obrigaorio);
};
function votacao(autorizacao, voto) {//aqui declaro os votos.
    if ( autorizacao === 'negado') {
        console.log('Voce ainda nao pode votar ,espera mais um pouco!!');
        console.log();
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 1 ) {
        cand1++;
    } else if ( (autorizacao === 'opcional'||  autorizacao === 'obrigatorio') && voto == 2 ) {
        cand2++;
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 3 ) {
        cand3++;
    } else if ( (autorizacao === 'opcional'||  autorizacao === 'obrigatorio') && voto == 4 ) {
        cand4++;
    } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto == 5 ) {
        cand5++;
    }
}
 







 }while(console.log("amen"));

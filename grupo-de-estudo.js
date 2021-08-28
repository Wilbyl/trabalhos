//

//const nome = prompt("Escreva seu nome:");
//const  rua= prompt("escreva endereço:");
//const hobby = prompt("hobby:");
    
//console.log(nome[0].toUpperCase () + nome.substr(1));
//console.log(rua[0].toUpperCase () + rua.substr(1));
//console.log(hobby[0].toUpperCase () + hobby.substr(1));

//segundo exercicio

//let valor = +prompt ("digite um valor:");

//if (valor%2 ===0){alert("seu numero é par")}
//else if(valor%2===1){alert("seu numero é impar")}
//else if (valor===0){alert("valor negado")};
//else{alert("não permitido")}


//const r1 = prompt("digite M ou F");
//// if(r1=== "M" || r1==="m"){alert("Você é Homen.")}
// else if(r1==="F" || r1==="f"){alert("Você e Mulher")}
//else{alert("resposta invalida")};


var prompt =require("prompt-sync")()

const nota = +prompt("Qual a sua nota:[0.0 - 10.0]");

if (nota >=0 && nota<=10){
    if (nota <6){alert("sua nota "+ nota+ " esta com media F")}
    else if (nota <=7.0){alert("sua nota foi "+nota+" esta com media D")}
    else if (nota <=8.0){alert("sua nota foi "+nota+" esta com media C")}
    else  nota <=9.0{alert("sua nota foi "+nota+" esta com media B")}}
   else {alert("sua nota foi "+nota+" esta com media A")};



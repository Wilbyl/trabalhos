//faça um programa que fale pro usuario se o numero e par ou impar

let n1 = parseInt(prompt ("digite um numer:"));

    if (n1%2 === 0 ){alert("numero " +n1 + " é par")}
    else if (n1%2=== 1){alert("seu numero " + n1 + " é impar")}
     else  {alert("digite uma opção valida")};

// a função "alert" tambem serve para mostrar a mensagem 

let lista= ["joão","maria","joakin","vinicius","coração","valquiria","gabriel"];
for(let item of lista){console.log(`${item}`)}

var a1= prompt("digite um nome: ");
var a2= prompt("digite  segundo nome:");

console.log(a1+a2);


let r1=[1,1,1];
let listem =[];
for(let i of r1){
    let novoElemento= prompt("digite um valor:")
    novoElemento.push(listem)
};
console.log(listem);









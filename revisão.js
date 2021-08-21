//comcatenaçao de String 

    let msn1 = "bem vindo";
    let msn = " onde vamos";
    let funsao = msn1+msn;
        console.log(funsao);
//primeira foram
//let = vc cria um objeto que pode ser usado para ser alterado


console.log(msn1+msn);
//segunda forma

const frase = "ola meu pequeno mundo ! "
console.log (frase.toUpperCase())
//deixar letra maiuscula .toUpperCase
//para deixar minuscula  .toLowerCase

//slice = com ele eu exibo apenas a parte em que eu coloquei ,o peimeiro numero onde começa e o segundo onde termina

let  nome ="wil";

console.log(nome.slice(0,1));

let frase5 = "vai dar certo";
console.log(frase5[0].toUpperCase()+frase5.substr(1));

//quando vc usa o simolo [] vc indica uma cordenada especifica para agir / o ".substr" serve para mostar o resto do meuconteudo
 
let cara = "nego";
 console.log(cara.slice(0,3) + cara[2].toUpperCase);





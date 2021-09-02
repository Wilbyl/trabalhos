const  prompt=require("prompt-sync")()


//aula sobre Object;
const film={
    nome:"madacascar",
    duracao:"120m",
    ano:"2013",
    atores:["os pinguins","Rei julian","Alex","Gia"]

};
/*console.log(film);
console.log(Object.keys(film));//tras todos os objetos em formna de uma lista;

console.log(Object.values(film));//tras todos os valores em forma de lista;

console.log (Object.entries(film))// tras todos os valores e objetos;*/

const props= Object.keys(film);

for(let i=0; i<props.length; i++){
    console.log(film[props[i]]);
};// o "for" percorre todo o programa lendo cada objeto e exibindo o nvalor dela;

for(const prop of props){//faz a mesma coisa que o anterior;
    console.log(film[prop])
};
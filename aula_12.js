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

console.log (Object.entries(film))// tras todos os valores e objetos;

const props= Object.keys(film);

for(let i=0; i<props.length; i++){
    console.log(film[props[i]]);
};// o "for" percorre todo o programa lendo cada objeto e exibindo o valor dela;

for(const prop of props){//faz a mesma coisa que o anterior;
    console.log(film[prop])
};

for(const props in film){ //faz o mesmo de cima;
    console.log(props,film[props])
};*/


const films =[];

const w1 = prompt("Quantos seus filmes:");

const filme={};

for (let i=0;i<w1;i++){


filme.nome= prompt("digite o nome do filme:");
filme.duracao= prompt("digite a duracao do filme:");
filme.ano= prompt("digite o ano:");

films.push(filme);

};
console.log(filme);//guarda as informaçoes e depois exibe todas uma ao lado da outra;
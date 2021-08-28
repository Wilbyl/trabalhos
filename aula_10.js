const prompt = require("prompt-sync")();

for(let a =0, a<5,a++ ){ }  //terminar de fazer e estudar muito isso aqui tem em udemy



//soluçao do exercicio 1
const n1= [10,20,30,40,50];//ele percorre a lista e exibe um por um.

let index =0;


while(index<n1.length){
    console.log(index,n1[index])
    index++;
};

//soluçao 2
const produtos = [
    {descricao:"coca-cola", valor:9.0 ,quntidade:10},
    {descricao:"toddynho", valor:3.5 ,quntidade:2},
    {descricao:"torcida", valor:2.0 ,quntidade:5}   
];
let max = 0;
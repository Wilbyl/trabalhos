const prompt = require("prompt-sync")();

for(let a =0; a< 5; a++ ){ }  //terminar de fazer e estudar muito isso aqui tem em udemy



//soluçao do exercicio 1
const n1= [10,20,30,40,50];//ele percorre a lista e exibe um por um.

//let index =0;


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
let ind = 0;

while (ind < produtos.length) {
    const {valor, quantidade} =produtos[ind];

    max = max + valor * quantidade;

    ind++;
}
console.log(max);
//================================================

const produtos = [
    { descricao: "Coca Cola", valor: 9.0, quantidade: 10 }, //posição 0
    { descricao: "Toddynho", valor: 3.5, quantidade: 5 }, //posição 1
    { descricao: "Doritos", valor: 2.0, quantidade: 2 }, // posição 2
  ];
  
  let total = 0;
  let index = 0;
  
  while (index < produtos.length) {
    const { valor, quantidade } = produtos[index];
  
    total = total + valor * quantidade;
  
    index++;
  }
  
  console.log(total);
const  prompt=require("prompt-sync")();


let total="";
let w=0;

while(w<10){
    w+=1;
    total+=w
    console.log(total);
};

let total2="";
let k = 0;

do{   
 k=k+1;
 toral2=total2 + k;
}while(k<10);

console.log ("resoltado:"+toral2);

//objetos
let list= {};// objeto vazio

let pep={

    nome:"carol",
    idade:23,
    genero:"pam",
    altura:"1,60",
    cor:"branca", 
    hobby:"maquiagem",
};
console.log(pep.hobby);
pep.escolaridade = "tecnico";//adiciona um objeto
delete pep.genero;

console.log()
console.log(pep)

let lug={
    nome:"valquiria",
    idade:"4 meses",
    peso:'5 kl'
};
lug.vamos=["mamadeira","mochila","negocio","leite"];
console.log(lug);
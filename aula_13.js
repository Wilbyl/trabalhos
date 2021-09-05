const  prompt=require("prompt-sync")()

class Animal {

constructor(nome,idade,preco){//isso e uma auto referencia;
this.nome=nome;
this.idade=idade;
this.preco=preco;

};
    };
class Cachorro extends Animal {// o extends e uma açao que faz com q eu possa herdar a class de outra class;

    Latir(){
        console.log("Passa a carteira.")
    }
};

let dog = new Cachorro("caramelo","3 anos","5,000");


console.log(dog)
dog.Latir();


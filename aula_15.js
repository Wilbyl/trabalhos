
const  prompt=require("prompt-sync")();

/*console.log("Urna da maldade ")


class Construtor{

Voto(){
    this.candidato1= 0;
    this.candidato2= 0;
    this.candidato= 0;
};
 Programa(){
    cosole.log("calculando ");
 };

}

let urna = new Construtor(); //agora meu objeto foi criado e posso usar ele;*/


// Programa Sincronos 
// Programas Assincronos
function enviarEmail(corpo,para){
    setTimeout(
        function(){console.log(
        `  Para: ${para}
        ============================================================
        Corpo:${corpo}
        ============================================================

        De: Will
            `);
    },4000);
};
console.log("inicio do Email:");

enviarEmail("Parabens vc ganhou um desconto de 10% ");

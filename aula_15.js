
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
function enviarEmail(corpo,para, callback){
    setTimeout(
        function(){console.log(
        `  Para: ${para}
        ============================================================
        Corpo:${corpo}
        ============================================================

        De: Will
        `);




        
        callback();
    },4000);
};



enviarEmail("Parabens vc ganhou um desconto de 10% ","nao gaste atoa",
function(){
    console.log(" Email enviado ");
    console.log("tudo ok");
    }
    ); // o nosso CallBack passa o parametro da função


    function testaBreak(x) {
        var i = 0;
     
        while (i < 6) {
           if (i == 3) {
              break;
           }
           i += 1;
        }
        return i * x;
     }
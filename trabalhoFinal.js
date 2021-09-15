/*Crie um jogo de ficção interativa que simule a rotina diária de um personagem.
Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de
estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu
personagem e o conduza durante o seu dia.
Cada escolha irá gerar uma consequência diferente para o seu personagem. O
jogo acaba quando o dia do seu personagem acabar. Você será responsável por
determinar o inicio e término do dia do seu personagem, além de avançar o
tempo a cada escolha.
É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for)
e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
Use toda sua criatividade para desenvolver uma história interessante e seja bem
específico com relação as escolhas que precisam ser feitas, para que seu jogo
seja divertido!*/
const  prompt=require("prompt-sync")();

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }
console.clear();
    console.log(`*******************************************************************************
******Bem vindo a historia que pode mudar um pouco sua forma de ver o mundo****
******************************************************************************* `);
    sleep(5000);
console.clear();
    console.log("\nTudo começou quando um gatoro na adolecencia,nao aguentava mais as dificuldades do mundo...");
    sleep(5000);
    

    
    
    
    
    
    
    
    
    
    class Inimigo {
        constructor(nome,duracao){
            this.nome = (nome);
            this.duracao = (duracao);
        }
      }
      
      class Goblin extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 5;
            this.status = 5;
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let goblin = new Goblin("Goblin", 5);
    
      goblin.dados();
      
      
      class Elfo extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 8;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let elfo = new Elfo("Elfo",8 );

      class Orc extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 12;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let orc = new Orc("Orc",12 );
    

      class Cerbero extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 16;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let cerbero = new Cerbero("Cerbero",16 );

        
      class Boss extends Inimigo{
        constructor(nome){ 
            super(nome);
            this.duracao= 18;
            
            
        }
        dados(){
            console.log(`
            O inimigo ${this.nome}
            duratao: ${this.duracao}
            `);
        }
      
      
      }
      let boss = new Boss("Orc",18 );
      
        goblin.dados();
        elfo.dados();
        orc.dados();
        cerbero.dados();
        boss.dados();

        sleep(5000);
        console.clear();
  //do{ 

  //  var aleatorio = [1, 2, 3];
  //  var computador = aleatorio[Math.floor(Math.random() * aleatorio.length)];

    
//}
//} while ( perg == "S" || perg =="s" );

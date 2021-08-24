console.log("Notas disponíveis: 1, 5, 10, 50 e 100" +/n +"Valor mínimo: 10 reais" +/n+"Valor máximo: 600 reais")
    
    var saque = Number(prompt("Qual o valor do saque?"))
    
    var nota100 = parseInt(saque / 100)
    var num = saque - (nota100 * 100)
    
    var nota50 = parseInt(num / 50)
    num = num - (nota50 * 50)
    
    var nota10 = parseInt(num / 10)
    num = num - (nota10 * 10)
    
    var nata5 = parseInt(num / 5)
    num = num - (nata5 * 5)
    
    nota1 = num
    
    alert("Quantidade de notas de 100:"+nota100);
    
    console.log ()
    alert("Quantidade de notas de 50:" +nota50);
    console.log();
    
    alert("Quantidade de notas de 10:"+ nota10);
    console.log();
    
    alert("Quantidade de notas de 5:" +nata5);
    console.log();
    
    alert("Quantidade de notas de 1: "+nota1);;
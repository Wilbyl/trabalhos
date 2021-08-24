console.log ("Jogo do detetive")
   alert("Digite '1' para SIM e '0' para Não ")
   
    console.log()
    let r1 = parseInt(prompt ("Telefonou para a vítima?:"));
    let r2 = parseInt(prompt ("esteve no local do crime?:"));
    let r3 = parseInt(prompt ("Mora perto da vítima?:"));
    let r4 = parseInt(prompt ("Devia a vitima?:"));
    let r5 = parseInt(prompt ("Já trabalhou com a vitima?:"));

    
    soma=r1+r2+r3+r4+r5
    
       
      if (soma ==2){alert("Voçê e suspeito!!")}
       else if (soma ==4){alert ("Cúmplice")}
       else if (soma ==3){alert ("Cúmplice")}
       else if (soma ==5){alert("Assasino!!")}
       else if(soma ==0){alert("Inossente")}
       else {alert("resposta incorreta!")}
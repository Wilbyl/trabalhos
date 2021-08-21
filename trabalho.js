function resp (sim,não){return sim+não}




console.log ("Jogo do detetive")
    
    let r1 = (prompt ("Telefonou para a vítima?:"));
    let r2 = (prompt ("esteve no local do crime?:"));
    let r3 = (prompt ("Mora perto da vítima?:"));
    let r4 = (prompt ("Devia a vitima?:"));
    let r5 = (prompt ("Já trabalhou com a vitima?:"));

if(r1===r3){alert("vc e suspeito")}
 else if(r1===r3===r5){alert("vc e cumplice")}
  else if(r1===r2===r3===r5){alert("cumplice")}
    else ( r1===r2===r3===r4===r5);{alert("culpado")};
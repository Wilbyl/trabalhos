const prompt = require("prompt-sync")();

/*let v1= prompt ("digite seu numero:");

let lista =[v1];
for(corre of lista ){
    console.log (`lista de numeros ${corre}`)
}
*/
function sleep (ms) {
    return new Promise (resolve => setTimeout (resolve,ms));
}
async function demo(){
    console.log("Espere...");
    await sleep (2000);
    console.log("2 segundos ");

// sloop em loop

for (let i=0 ; i<5 ; i++){
    if (i ===3 )
     await sleep(2000);
    console.log(i); 
 }
}
demo(); 
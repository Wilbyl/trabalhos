const prompt = require("prompt-sync")();

/*let v1= prompt ("digite seu numero:");

let lista =[v1];
for(corre of lista ){
    console.log (`lista de numeros ${corre}`)
}
*/



     var timer = [60 , 1 , 60];
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
startTimer();
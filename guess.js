let difficulty = 0;
let range = 0;
let counter = 5;
let guessentry = 0;
let guessNumber =0;
let gamewon = 0;

function easy(){
 difficulty = 1;
 range = 21;
 document.getElementById("modee").innerHTML="Easy | 1 - 20";
 guessNumber = Math.floor( Math.random() * range);
}

function medium(){
 difficulty = 2;
 range = 51;
 document.getElementById("modee").innerHTML="Medium | 1 - 50";
 guessNumber = Math.floor( Math.random() * range);
}

function hard() {
 difficulty = 3;
 range = 101;
 document.getElementById("modee").innerHTML="Hard | 1 - 100";
 guessNumber = Math.floor( Math.random() * range);
}

function cleartxt(){
    document.getElementById("numberguess").value ="";
}

function reset(){
    difficulty = 0;
    range = 0;
    counter = 5;
    guessentry = 0;
    guessNumber =0;
    gamewon=0;
     document.getElementById("try1").innerHTML=counter;
     document.getElementById("big1").style.backgroundColor="black";
     document.getElementById("modee").innerHTML= "None";
     document.getElementById("alertt").innerHTML= "";
     cleartxt();
}

function guess(){
if (difficulty==0){
    window.alert("You have not set game difficulty mode!");
    cleartxt();
}else if (difficulty!=0 && counter==0 && gamewon != 1){
    reset()
    window.alert("Game over! You have exhausted your attempts, restart game");
}else if (difficulty!=0 && gamewon == 1){
    window.alert("Hurray! You won, restart game");
    reset();
}else if (difficulty!=0 && counter>0){
 guessentry = document.getElementById("numberguess").value;
   if (guessentry == guessNumber){
 document.getElementById("alertt").innerHTML="Correct! you guessed right";
 document.getElementById("big1").style.backgroundColor="green";
 gamewon=1;
   }else if (guessentry>guessNumber){
 document.getElementById("alertt").innerHTML="Try again! Guess too high";
 document.getElementById("big1").style.backgroundColor="red";
 cleartxt();
   }else if(guessentry<guessNumber){
 document.getElementById("alertt").innerHTML="Try again! Guess too low";
 document.getElementById("big1").style.backgroundColor="orange";
 cleartxt();
   }
    counter-=1
 document.getElementById("try1").innerHTML=counter;
}
} 


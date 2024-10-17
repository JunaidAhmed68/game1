var pTag=document.getElementById("wonToss");
var player=document.getElementById("Won");
var Dise1=document.getElementById("dice1")
var Dise2=document.getElementById("dice2")

function enterValue(){
    var player1=prompt("choose the value : Head / Tail");
    return player1;
}
function toss(){
    var tossValue=Math.floor(Math.random()*2);
    // console.log(tossValue);
    return tossValue;
}
function getDiceNumber(getvalue){
   value=Math.floor(Math.random()*7);
   if(getvalue==1){
       Dise1.innerText=value;
   }
   if(getvalue==2){
    Dise2.innerText=value;
   }
}
if(Dise1.innerText==Dise2.innerText){
player.innerText="player1 won the game!"
}


if(enterValue()=="head"){
    var player2="tail";
}else{
     player2= "head";
}


 if(toss()==0){
    pTag.innerText="player 1 won the toss ";
   
    }
else{
    pTag.innerText="player 2 won the toss ";

}



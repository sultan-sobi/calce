console.clear();


var totalAttempt=6;
var attempt=0;
var lost=0;
var win=0;


const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guess=form.querySelector("input");
const checkButton=form.querySelector(".check");
const newElement=document.createElement("p");

const result=cardBody.querySelector(".result");
const remaining=cardBody.querySelector(".remaining");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    attempt++;
    if(attempt>5){
        guess.disabled=true;
        checkButton.disabled=true;
    }else{

        checkResult(guess.value);
    }
  guess.value="";
   remaining.innerHTML=`remaining attempt:${totalAttempt-attempt}`

    
})

   

const checkResult=(guess)=>{
   const random=randomNumber(5);
   
if(guess==random){
    result.innerHTML=`you have won`;
    win++;
}else{
    result.innerHTML=`you have lost:the randome number is${random}`
    lost++;
}
newElement.innerHTML=`Won:${win} ; Lost:${lost}`;
cardBody.appendChild(newElement);

}


const randomNumber=(limit)=>{
    return Math.floor(Math.random()*limit)+1;
}
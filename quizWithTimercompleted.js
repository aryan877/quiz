const correctAnswers=["A", "C", "C", "A", "D", "B", "C", "B", "B", "A"];
const form=document.querySelector("form.quiz-form");
const result=document.querySelector("div.result");
const button=document.querySelector("button");
const popup=document.querySelector(".popup-wrapper");
const close=document.querySelector(".popup-close");
const quiz = document.querySelector(".quiz");
const timerDisplay=document.querySelector(".timerDisplay");
const sessionTime = 110 ;
/*
let sec=0;
let min=0;
let hour=0;
if(sessionTime>60000){
    sec=59;
    min=min-1;
}
if(sessionTime>3600000){
    min=59;
    hour=Math.trunc(sessionTime/1000/60/60);
    hour=hour-1
} 
*/



const checker = function(e){
    popup.style.display="none"; 
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer == correctAnswers[index]){
            score+=10;
        }});

        scroll(0,0);
//result.querySelector("span").textContent=`${score}%`;
result.classList.remove("d-none");

let output=0;
const timer=setInterval(() => {
  result.querySelector("span").textContent=`${output}%`;
  if(score===output){
      clearInterval(timer);
  } 
  else{
      output++;
  }
},10);

quiz.classList.add("d-none");

};
 

close.addEventListener("click",(e)=>{
   checker(e);
});


popup.addEventListener("click",(e)=>{
    checker(e);
});

button.addEventListener("click" , e => {
    checker(e);
});

//submit form
form.addEventListener("submit",e=>{
    e.preventDefault();
    let score=0;
    quiz.classList.add("d-none");
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=10;
        }
    });
console.log(score);


//show results on page
scroll(0,0);
//result.querySelector("span").textContent=`${score}%`;
result.classList.remove("d-none");
//score animation
let output=0;
const timer=setInterval(() => {
  result.querySelector("span").textContent=`${output}%`;
  if(score===output){
      clearInterval(timer);
  } 
  else{
      output++;
  }
},10);

});

//timer
setTimeout(()=>{
    popup.style.display="block";
    timerDisplay.style.display="none";
},sessionTime * 100);




//window object (global object)
//console.log("hello");
//window.console.log("hello");

//console.log(document.querySelector("form"));
//console.log(window.document.querySelector("form"));

//alert("hello");
//window.alert("hello");

/*setTimeout(()=>{
      alert("hello");
  },3000); */

  let i=0;
  const t = setInterval(
      () => {
      console.log("hello");
      i++;
      if(i===10){
          clearInterval(t);
      }
  },1000);

const timedisplay = function(e){
      
    let s = 60;
    let m = Math.trunc((sessionTime / 60) - 1) % 60 ; 
    let hour = Math.trunc (sessionTime / ( 60 * 60 ));

    if(m==59){
        hour = hour - 1;
    }

    const y = setInterval(()=>{
    
    // console.log(ti);
    // const s= Math.round(ti/(1000*60*60));
    // const m=Math.trunc(s/(60*60));
    // const h=Math.trunc(m/60);
    //const sec=Math.trunc(s/60/60);
    
    //logic for the 60th second & minute as they should show zero at 60....

   

    s -= 1 ;

   if( s == 0 ){
        s = 60;
        m -= 1;
    }

    if( m == 0 ){

        hour = hour - 1 
        m = 60;
    } 
    
    if( hour < 0) {
        clearInterval(y);
        hour = 0;
        m = 0;
        s = 0;
    }

    const html=`Time-left:
    <span>${hour < 10 ? `0${hour} ` : `${hour} `} </span>hours :
    <span>${m % 60 < 10 ? `0${m % 60} ` : `${m % 60} `}</span>minutes :
    <span>${s % 60 < 10 ? `0${s % 60} ` : `${s % 60} `} </span>seconds
    `;
    
    timerDisplay.innerHTML = html;
    
    

    
    //console.log(h,m,s);
    
  
  },1000)

}

timedisplay();

/*

console.log(hour,min,sec);

const timeCounter=function(e){
    for(let i=hour;i>=0;i--){
        for(let j=min;j>=0;j++){
            for(let k=sec;k>=0;k--){
                console.log(i,j,k);
                setInterval(timeCounter,1000);
            }
        }
    }
}
//setInterval(timeCounter,1000); */



  
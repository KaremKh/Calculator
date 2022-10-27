const add = function(a,b) {
    return a+b;
};
  
  const subtract = function(a,b) {
      return a-b;
};
  
  const multipy = function(a,b) {
    return a*b;
};

  const divide = function(a,b) {
    return a/b;
};

function operate(operator,a,b){
    if (operator=="+")
        return add(a,b);
    else if (operator=="-")
        return subtract(a,b);
    else if (operator=="*")
        return multipy(a,b);
    else if (operator=="/")
        return divide(a,b);
    else 
        return "ERROR";  
}

let onePoint=true;
let gotFirst=false;
let gotOperator=false;
let operator;
let firstNumber;
let secondNumber;
let currentValue="";
let skip=false;
let startNum= true;
const nbtns=document.querySelectorAll('.nbtn');
let cScreen=document.querySelector('.calculator-screen');
nbtns.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if(startNum==true)
            
        console.log(e.target.textContent);
        
        currentValue+=`${e.target.textContent}`;
        cScreen.textContent=currentValue;
        skip=false;
        
    })
});

const obtns=document.querySelectorAll('.obtn');

obtns.forEach(item=>{
    item.addEventListener('click',(e)=>{
        
        if (skip==false){

            if (!gotOperator){
            firstNumber=currentValue;
            operator=e.target.textContent;
            currentValue="";
            gotOperator=true; 
            console.log(operator);
        }
        
            else{
                secondNumber=currentValue;
                cScreen.textContent="";
                currentValue=`${operate(operator,parseInt(firstNumber),parseInt(secondNumber))}` ;
                operator=e.target.textContent;
                cScreen.textContent=currentValue;
                firstNumber=currentValue;
                currentValue="";
                console.log(operator)
        }
        skip=true;
        startNum=true; 
        onePoint=true;
        }
         
             
        
        
    })
});

const ebtn=document.querySelector('.ebtn');
ebtn.addEventListener('click',(e)=>{
    
    if (skip==false){
        startNum=true;
        secondNumber=currentValue;
        console.log(secondNumber);
        cScreen.textContent=`${operate(operator,parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)}`  ;
        currentValue=`${operate(operator,parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)}`;
        firstNumber=currentValue;
        gotOperator=false;
    
    
    }    
        
    
    
});

const pbtn=document.getElementById('btn.');
pbtn.addEventListener('click',(e)=>{
    if(skip==false && onePoint==true){
        currentValue+=".";
        cScreen.textContent+=".";
        onePoint=false;
    }
})


function clearScreen(){
    cScreen.textContent="";
    firstNumber="";
    secondNumber="";
    currentValue="";
    skip=false;
    gotFirst=false;
    gotOperator=false;
    operator="";
}

const clrbtn=document.getElementById('btn-clear');
clrbtn.addEventListener('click',clearScreen);
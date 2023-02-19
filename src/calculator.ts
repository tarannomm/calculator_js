// tarannom azimi
//difining the required variables
let number:string="0";
let isDesimal:boolean=false;
let equation:number=0;
let lastEvent:string="";
let lastDigit:string; 
let answers:number[]=[];
let number1:number=0;
let number2:number=0;
let operation:string="";
let resultText=document.getElementById("resultText");
let numberOne=document.getElementById('numberOne');
let numberTwo=document.getElementById('numberTwo');
 
//using the button to show or hide history
 const Showbtn=document.getElementById('btnHistory') as HTMLDListElement;
 const hideBtn=document.getElementById('HideBtn') as HTMLButtonElement; 
 const history1=document.getElementsByClassName("history")[0];
 //adding onClick event to history btn.hide or show histories
 Showbtn!.addEventListener('click',()=>{
    history1.classList.add("history1");
 })
 hideBtn!.addEventListener('click',()=>{
    history1.classList.remove("history1");
 })
 //functions to set numbers
 const setNumber1=(num1:number):void=>{
    numberOne!.innerText=num1+operation;
 }
 const setNumber2=(num2:number):void=>{
    numberTwo!.innerText=num2+"=";
 }
 //fonction to set operators
 const setOperator=(op:string):void=>{
   switch(op){
      case "sum":
        operation="+";
        break;
      case "sub":
        operation="-";
        break;
      case "times":
        operation="*" ;
        break;
      case "divide":
        operation="/" ;
        break;
      default:
        operation="";
   }
 }
 //function to update number box after adding a new digit
const updateText=(text:string):void=>{
resultText!.innerText=text;
}
//function to adding a new digit to number
const AddDigit=(digit:string):void=>{
    if(number!="0"){
    number+=digit;}
    else{
        if(digit!=".")  number=digit;
        else number="0."
    }
    updateText(number);
}
//function to reset number box after adding a operator
const resetAfterEvent=(e:string):void=>{
number="0";
lastEvent=e;
updateText(number);
isDesimal=false;
}
 //function to doing operation  
const operator=(op:string)=>{
    number1=equation;
     setNumber1(number1);
    number2=parseFloat(number);
     
    setOperator(op)
    //switch to choose operation
    switch(op){
        case "sum":
              equation +=parseFloat(number);
             resetAfterEvent("sum");
             break;
        case "sub":
            if(lastEvent===""){
                equation=parseFloat(number)
            }
            else{
            equation-=parseFloat(number);}
            resetAfterEvent("sub");
            break;
        case "divide":
            if(lastEvent==="") {equation=parseFloat(number)}
            else{
                if(number!="0")equation/=parseFloat(number);
                else{equation=0;
                    alert("can not divide a number to zero!");
                    number=equation.toString();}}  
            resetAfterEvent("divide");
            break;
        case "times":
            if(lastEvent===""){equation=parseFloat(number)}
            else{
                equation*=parseFloat(number)
            }
            resetAfterEvent("times");
            break;
        default:
         updateText("0")  
    }
}
//function to apply decimal numbers
const Desimal=()=>{
    if(isDesimal===false){
        isDesimal=true
        AddDigit(".")
    }
}
//function to change the sign of number
const changeSign=()=>{
    if(parseFloat(number)>0) number= "-"+number;
    else{number=number.substring(1,number.length)}
    updateText(number)  
}
//function to calculate the final answer
const answer=()=>{
    number2=parseFloat(number);
    operation=lastEvent
    setNumber2(number2);
    setOperator(lastEvent);
    if(lastEvent==="sum"){
        operator("sum");
    }
    if(lastEvent==="divide"){
       operator("divide"); 
    }
    if(lastEvent==="times"){
        operator("times")
    }
    if(lastEvent==="sub"){
       operator("sub")
    }
    answers.push(equation);
    number=equation.toString();
    addHistoryElement(answers[answers.length-1])
    equation=0;
    updateText(number)     
}
//the function of 
const clearAll=()=>{
 equation=0;
 number="0";
 lastEvent="";
 number1=0;
 number2=0;
 numberOne!.innerText="";
 numberTwo!.innerText="";
 operation="";
 updateText(number);
 isDesimal=false;
}
// function to remove the last digit
const removeDigit=()=>{
     lastDigit=number[number.length-1];
    if(number.length>0) {
        number=number.substring(0,number.length-1)
        if(number.length<=0){number="0"
     if(lastDigit=".") isDesimal=false}}
     updateText(number)
}
// function to adding & removing an item to the list
const addHistoryElement=(answer:number)=>{
    var ul=document.getElementById("calculationsHistory");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(`${answer}`));
    li.setAttribute("id",`${answers.length-1}`)
    ul!.appendChild(li)
    li.addEventListener('click',()=>{
        li.remove();
    })
    
}
 
 
 
 

 
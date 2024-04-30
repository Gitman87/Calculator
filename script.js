// date
const dateDisplay = document.querySelector(".date");
const timeDisplay = document.querySelector(".time");
function clock() {
 
  const today = new Date();
  let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
  let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
  const todayTime = hours + ":" + minutes + ":" + seconds;
  // console.log(typeof todayTime);
  // let todayFormat= today[Symbol.toPrimitive]("string");
  let dateFormat = today.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  // let timeFormat=todayTime.toLocaleDateString('pl-PL',
  // {

  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit'
  // })
  let newTodayFormat = dateFormat.replace(",", "");
  if (dateDisplay) {
    dateDisplay.textContent = newTodayFormat;
    timeDisplay.textContent = todayTime;
  } else {
    // console.log(newTodayFormat, todayTime);
  }
  // console.log(newTodayFormat, todayTime)
}
clock();
setInterval(clock, 1000);

//display input listener
const display = document.querySelector(".calc-display-container");
const para = document.createElement("p");
para.classList.add("calc-display");
para.textContent = "";
let argFlag = 0;
let dotFlag = 0;


// console.log(typeof display);
// display.textContent='';
let temporaryString = "";

function displayInput(pressed) {
  console.log(pressed);
  console.log(typeof pressed);
  temporaryString += pressed;
  console.log(`temporary string:${temporaryString}`);
  console.log(`displayInput flag ${ argFlag}`);
  

  para.textContent += `${pressed}`;
  return display.appendChild(para);
}



function equal(string) {

  //lear display
  para.textContent = "";
  display.appendChild(para);
  let result =  eval(string);
  para.textContent=result;
  display.appendChild(para);
  console.log(temporaryString)
  //
  argFlag = 0;
  dotFlag = 0;
  


   return console.log(result)
  }
  // aArgument = "";
  // opArgument = "";
  // bArgument = "";
  // argFlag = 0;



// Calculator logic===================================
//button listener

const buttons = document.querySelectorAll(".digit-button");

buttons.forEach((button) => {
  // console.log(button.id);
  button.addEventListener("click", () => {
    
      switch (button.id) {
        case "seven":
          argFlag=0;
          return displayInput(7);

        case "eight":
          argFlag=0;
          return displayInput(8);
        case "nine":
          argFlag=0;
          return displayInput(9);
        case "divide-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("/");}
        case "four":
          argFlag=0;
          return displayInput(4);
        case "five":
          argFlag=0;
          return displayInput(5);
        case "six":
          argFlag=0;
          return displayInput(6);
        case "multiply-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("*");}
        case "one":
          argFlag=0;
          return displayInput(1);
        case "two":
          argFlag=0;
          return displayInput(2);
        case "three":
          argFlag=0;
          return displayInput(3);
        case "plus":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("+");}
        case "minus-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("-");}
        case "zero":
          argFlag=0;
          return displayInput(0);
        case "dot-button":
          if (dotFlag>0) {
            break;
          } else {
            dotFlag=1;
            return displayInput(".");
          }

         case "equal":
          if(argFlag===0)
          {
            return equal(temporaryString);
          }
          else{
            console.log("Error. Operator at the end of expression")
          }
          
        // case "plus":
        //   return  appendOp('+');
        default:
          console.log("button error flag 0");
          break;
      }
   
      })
    })

//touch listener ===============================================
buttons.forEach((button) => {
  // console.log(button.id);
  button.addEventListener("ontouchstart", () => {
    
      switch (button.id) {
        case "seven":
          argFlag=0;
          return displayInput(7);

        case "eight":
          argFlag=0;
          return displayInput(8);
        case "nine":
          argFlag=0;
          return displayInput(9);
        case "divide-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("/");}
        case "four":
          argFlag=0;
          return displayInput(4);
        case "five":
          argFlag=0;
          return displayInput(5);
        case "six":
          argFlag=0;
          return displayInput(6);
        case "multiply-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("*");}
        case "one":
          argFlag=0;
          return displayInput(1);
        case "two":
          argFlag=0;
          return displayInput(2);
        case "three":
          argFlag=0;
          return displayInput(3);
        case "plus":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("+");}
        case "minus-button":
          if(argFlag===1)
          {
            break;
          }
          else
          {dotFlag = 0;
          argFlag=1;
          return displayInput("-");}
        case "zero":
          argFlag=0;
          return displayInput(0);
        case "dot-button":
          if (dotFlag>0) {
            break;
          } else {
            dotFlag=1;
            return displayInput(".");
          }

         case "equal":
          if(argFlag===0)
          {
            return equal(temporaryString);
          }
          else{
            console.log("Error. Operator at the end of expression")
          }
          
        // case "plus":
        //   return  appendOp('+');
        default:
          console.log("button error flag 0");
          break;
      }
   
      })
    })

   
 
 

// Side button functionallities=================================

const clearButton = document.querySelector(".button-image-clear");
clearButton.addEventListener("click",()=>
{
  para.textContent = "";
  display.appendChild(para);
  argFlag = 0;
  dotFlag = 0;
  temporaryString='';
})

const nightButton = document.querySelector(".button-image-night-mode");
const body= document.querySelector("body");
const led=document.querySelector(".red-led");
let nightFlag=0;



nightButton.addEventListener("click",()=>
{ 
  if(nightFlag===0)
  {
    body.setAttribute("style","filter: brightness(70%);background-color:black;");
    para.setAttribute("style","filter: brightness(300%);text-shadow: 0px 0px 5px #14a8a4; ");
    dateDisplay.setAttribute("style","filter: brightness(300%); text-shadow: 0px 0px 10px #14a8a4;");
    timeDisplay.setAttribute("style","filter: brightness(300%); text-shadow: 0px 0px 10px #14a8a4;");
    led.setAttribute("style", "background-color: red; filter: brightness(300%);box-shadow: 0px 0px 10px rgb(211, 138, 117);" );
    nightFlag=1;
  }
  else
  {
    body.setAttribute("style","filter: brightness(100%);background-color:white;");
    para.setAttribute("style","filter: brightness(100%)");
    dateDisplay.setAttribute("style","filter: brightness(100%)");
    timeDisplay.setAttribute("style","filter: brightness(100%)");
    led.setAttribute("style",  "background-color: rgb(78, 1, 1); filter: brightness(100%);" );
    nightFlag=0;
  }
})


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


// console.log(typeof display);
// display.textContent='';
let temporaryString = "";

function displayInput(pressed) {
  console.log(pressed);
  console.log(typeof pressed);
  temporaryString += pressed;
  console.log(`temporary string:${temporaryString}`);
  argFlag=0;

  para.textContent += `${pressed}`;
  return display.appendChild(para);
}
let aArgument = "";
let opArgument = "";
let bArgument = "";
let argFlag = 0;
let dotFlag = 0;

function appendOp(item) {
  argFlag = 1;
  aArgument = para.textContent.slice();
  para.textContent = "";
  temporaryString += item;
  console.log(`Text content: ${para.textContent}`);
  display.appendChild(para);
  opArgument = item;
  console.log(`opArgument: ${item}`);
  //  argFlag=0;
  return console.log(`aArgument: ${aArgument}`);
}
function equal(a, op) {
  bArgument = para.textContent.slice();
  console.log(`B argument:${bArgument}`);
  let result = 0;
  para.textContent = "";
  display.appendChild(para);
  console.log(`tempstring equal content: ${temporaryString}`);
  switch (op) {
    case "+":
      result = parseFloat(a) + parseFloat(bArgument);
      para.textContent = `${result}`;
      console.log(`Result: ${result}`);
      aArgument = "";
      opArgument = "";
      bArgument = "";
      argFlag = 2;
      return display.appendChild(para);

    case "-":
      result = parseFloat(a) - parseFloat(bArgument);
      para.textContent = `${result}`;
      console.log(`Result: ${result}`);
      aArgument = "";
      opArgument = "";
      bArgument = "";
      argFlag = 0;
      return display.appendChild(para);
    case "*":
      result = parseFloat(a) * parseFloat(bArgument);
      para.textContent = `${result}`;
      console.log(`Result: ${result}`);
      aArgument = "";
      opArgument = "";
      bArgument = "";
      argFlag = 0;
      return display.appendChild(para);
    case "/":
      result = parseFloat(a) / parseFloat(bArgument);
      para.textContent = `${result}`;
      console.log(`Result: ${result}`);
      aArgument = "";
      opArgument = "";
      bArgument = "";
      argFlag = 0;
      return display.appendChild(para);
    default:
      console.log("Calculation error");
  }
  aArgument = "";
  opArgument = "";
  bArgument = "";
  argFlag = 0;

  // para.textContent= `${result}`;
  // console.log(`Result: ${result}`);
  // return display.appendChild(para);
}

// Calculator logic===================================
//button listener
const pressedButton = 0;
const buttons = document.querySelectorAll(".digit-button");

buttons.forEach((button) => {
  // console.log(button.id);
  button.addEventListener("click", () => {
    if (argFlag === 0) {
      switch (button.id) {
        case "seven":
          return displayInput(7);

        case "eight":
          return displayInput(8);
        case "nine":
          return displayInput(9);
        case "divide-button":
          return appendOp("/");
        case "four":
          return displayInput(4);
        case "five":
          return displayInput(5);
        case "six":
          return displayInput(6);
        case "multiply-button":
          return appendOp("*");
        case "one":
          return displayInput(1);
        case "two":
          return displayInput(2);
        case "three":
          return displayInput(3);
        case "plus":
          return appendOp("+");
        case "minus-button":
          return appendOp("-");
        case "zero":
          return displayInput(0);
        case "dot-button":
          if (para.textContent.includes(".")) {
            break;
          } else {
            return displayInput(".");
          }

        // case "equal":
        //   return displayInput('&#61;');
        // case "plus":
        //   return  appendOp('+');
        default:
          console.log("button error");
          break;
      }
    } else if (argFlag === 1) {
      switch (button.id) {
        case "seven":
          return displayInput(7);

        case "eight":
          return displayInput(8);
        case "nine":
          return displayInput(9);

        case "four":
          return displayInput(4);
        case "five":
          return displayInput(5);
        case "six":
          return displayInput(6);
        case "one":
          return displayInput(1);
        case "two":
          return displayInput(2);
        case "three":
          return displayInput(3);
        case "zero":
          return displayInput(0);
        case "dot-button":
          if (para.textContent.includes(".")) {
            break;
          } else {
            return displayInput(".");
          }
        case "equal":
          return equal(aArgument, opArgument);

        default:
          console.log("button error");
          break;
      }
    }

    // console.log(pressedButton);
  });
});
// Side button functionallities=================================

const clearButton = document.querySelector(".button-image-clear");
clearButton.addEventListener("click",()=>
{
  para.textContent = "";
  display.appendChild(para);
  aArgument = "";
  opArgument = "";
  bArgument = "";
  argFlag = 0;
  dotFlag = 0;
  temporaryString = "";
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




// date
function clock()
{
  const dateDisplay= document.querySelector('.date');
  const timeDisplay = document.querySelector('.time')
  const today = new Date();
  let hours=(today.getHours()<10?'0':'') + today.getHours();
  let minutes= (today.getMinutes()<10?'0':'') + today.getMinutes();
  let seconds = (today.getSeconds()<10?'0':'') + today.getSeconds();
  const todayTime= hours+":"+minutes+":"+seconds;
  // console.log(typeof todayTime);
  // let todayFormat= today[Symbol.toPrimitive]("string");
  let dateFormat=today.toLocaleDateString('pl-PL',
  {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
   
  });
  // let timeFormat=todayTime.toLocaleDateString('pl-PL',
  // { 
    
    
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit'
  // })
  let newTodayFormat= dateFormat.replace(',', '');
  if (dateDisplay) {
    dateDisplay.textContent = newTodayFormat;
    timeDisplay.textContent= todayTime
  } else {
    // console.log(newTodayFormat, todayTime);
  }
  // console.log(newTodayFormat, todayTime)
}
clock();
setInterval(clock,1000);
// Calculator logic===================================
//button listener
const pressedButton=0;
const buttons = document.querySelectorAll('.digit-button');
console.log(buttons);
buttons.forEach((button)=>
{
// console.log(button.id);
  let cickedButton=button.addEventListener("click", ()=>
  {
    console.log("clicked");
  
  switch(button.id)
  {
    case "seven":
      console.log("seven");
      break;
      // return 7;
       
    case "eight":
      return 8;
    case "nine":
      return 9;
    case "divide-button":
      return "&#247;";
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "multiply-button":
      return "&#215;";
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "minus-button":
      return "&#8722;";
    case "zero":
      return 0;
    case "dot-button":
      return ".";
    case "equal":
      return "&#61;"
    case "plus":
      return "&#43";
    default:
      console.log("button error");
      break;
  }
  // console.log(pressedButton);
});

})
conso.log
//test
// const sevenButton= document.querySelector("#seven");
// sevenButton.addEventListener("click", ()=>
// {
//   console.log("seven clicked");
// })
// // Calculation========================================================
// //copied from Odin exercise
// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }
// let powerCalc = new Calculator;
let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

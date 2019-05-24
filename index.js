
// need a variable called 'number array'. It should be an empty array e.g. []
// create a variable called temp as an empty string ''.
var numString = ''
var numArray = []
let display = document.getElementById('display')
// console.log(display)
listen()
// add an event listener - this is a function that waits for an event to occur. In this case it is the 'click' of the mouse on the calculator keys.
function listen() {
  document.addEventListener('click', getButtonValue)
}
// need a function that gets the button value - decimal, AC, CE and equals. Need if and if/else statements. 
//   if this specifies the block of code to be executed if the specified condition is true.
  //   else/if specifies a new condition to test if the first condition is false. In this case, if the user hits the AC button then it isn't the decimal button. etc.
   //   need an 'else' statement to specify a block of code to be executed if the same condition is false.
// display the number inputs on the calculator screen and stores the number in the calculator.

function getButtonValue () {
    // console.log("hello")
    let button = event.target.value
    // console.log(button)
    if (!isNaN(button) || button === '.') {
     
    } else if (button === 'AC') {
      allClear()
  
    } else if (button === 'CE') {
      clear()
    } else if (button === '=') {
      calculate()
    } else {
      storeNumber(button) 
    }
}

function number (button) {
    if (button === '.' && numString.includes('.')) {
        return
    } else if (numString.charAt(0) === '0' && button === '0') {
        return
    } else {
        numString += button
        display.value = numString
    }
}
//clear or reset all main variables

function allClear () {
    numString = ''
    numArray = []
    display.value = '0'
}

function clear () {
    numString = ''
    display.value = '0'
} 
function storeNumber (button) {
    if (numString === '' && numArray === '0') {
    return
    } else if (numString === '') {
        numArray.length = numArray.length -1
        numArray.push(button)
    } else {
        numArray.push(numString)
        numArray.push(button)
        numString = ''
    }
}
 // when equals button is hit perform calculation. need to create an array and an 'if' variable that adds numbers together. Needs and 'else if' statement if the button hit is an operator + - / *
function calculate () {
    numArray.push(numString)
    let currentNumber = Number(numArray[0])
    for (var i = 0; i < numArray.length; i++) {
        let nextNumber = Number(numArray[i + 1])
        let symbol = numArray[i]
        if (symbol === '+') {
            currentNumber += nextNumber
        } else if (symbol === '-') {
            currentNumber -= nextNumber
        } else if (symbol === '*') {
            currentNumber *= nextNumber
        } else if (symbol === '/') {
            currentNumber /= nextNumber
        }
    }
    if (currentNumber < 0) {
        currentNumber = Math.abs(currentNumber) + '-'
      }
      display.value = currentNumber
      numString = currentNumber
      numArray = []
      }
    

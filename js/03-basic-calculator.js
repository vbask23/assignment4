// IMPORT THE MODULE
import {add, subtract, divide, multiply} from './modules/calculator.js'

// COLLECT FIRST NUMBER FROM USER

let firstNum
let secondNum
let opChoice
do {
    firstNum = parseInt(prompt('Enter the first number: '))

// COLLECT SECOND NUMBER FROM USER 
    secondNum = parseInt(prompt('Enter the second number: '))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    opChoice = prompt(`Which operation would you like to perform on these numbers?\nAdd, subtract, multiply or divide? Write 'a', 's', 'm', or 'd'`).toLowerCase()
    if (opChoice !== 'a' && opChoice !== 's' && opChoice !== 'd' && opChoice !== 'm' ) {
        alert(`You haven't entered which operation to perform. \nType 'a'(add), 's'(subtract), 'm'(multiply), or 'd'(divide)`)
    } else {
        break
    }
}
while (opChoice !== 'a' && opChoice !== 's' && opChoice !== 'd' && opChoice !== 'm' ) 
   
// CHECK TO SEE WHAT OPERATION THEY'RE USING
function checkOp() {
    return opChoice, firstNum, secondNum
}

// CALL THE APPROPRIATE FUNCTION
function appFunc() {
    checkOp()
    if (opChoice === 'a') {
        add(firstNum, secondNum, opChoice)
    } else if (opChoice === 's') {
        subtract(firstNum, secondNum, opChoice)
    } else if (opChoice === 'd') {
        divide(firstNum, secondNum, opChoice)
    } else {
        multiply(firstNum, secondNum, opChoice)
    }
}

appFunc()





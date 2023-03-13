// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (firstNum, secondNum, opChoice) => {
    
    switch (opChoice) {
        case 'a': 
            alert(`${firstNum} plus ${secondNum} is ${firstNum + secondNum}`)
            return 
            break
        case 's':
            alert(`${firstNum} minus ${secondNum} is ${firstNum - secondNum}`)
            return
            break
        case 'd':
            alert(`${firstNum} divided by ${secondNum} is ${firstNum/ secondNum}`)
            break
        case 'm':
            alert(`${firstNum} multiplied by ${secondNum} is ${firstNum * secondNum}`)
            break
        }
    
    }


// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(firstNum, secondNum, opChoice) {
    calculate(firstNum, secondNum, opChoice)       
}   

// SUBTRACT FUNCTION
const subtract = (firstNum, secondNum, opChoice) =>  {
    calculate(firstNum, secondNum, opChoice)
}

// MULTIPLY FUNCTION
const multiply = (firstNum, secondNum, opChoice) =>  {
    calculate(firstNum, secondNum, opChoice)   
}

// DIVIDE FUNCTION
const divide = (firstNum, secondNum, opChoice) =>  { 
    calculate(firstNum, secondNum, opChoice)   
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export{add, subtract, multiply, divide}


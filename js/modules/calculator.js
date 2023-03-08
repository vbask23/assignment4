// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (i, j) => {
    if (i > j) {
       k = i % j
    } else {
        k = j % i
    }
    return k 
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (x,y) => {
    alert(`${x} plus ${y} is ${x + y} `)
}   

// SUBTRACT FUNCTION
const subtract = (a,b) =>  {
    alert(`${a} minus ${b} is ${a - b}`)
}

// MULTIPLY FUNCTION
const multiply = (c,d) =>  {
    alert(`${c} multiplied by ${d} is ${c * d}`)
}

// DIVIDE FUNCTION
const divide = (e, f) =>  { 
    alert(`${e} divided by ${f} is ${e / f}`)
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export{add, subtract, multiply, divide}


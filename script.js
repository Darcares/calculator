let numOne = null;
let numTwo = null;
let operator = null;

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(numOne, numTwo, operator) {
    switch(operator) {
        case "add":
            return add(numOne,numTwo);
            break;

        case "subtract":
            return subtract(numOne, numTwo);
            break;

        case "multiply":
            return multiply(numOne, numTwo);
            break;

        case "divide": 
            return divide(numOne, numTwo);
            break;

        default:
            console.log("Error");
            break;
    }
}
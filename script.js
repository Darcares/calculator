initializeProgram();

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

function printScreen(content) {
    const screen = document.querySelector('.screen');

    if(screen.textContent === '0') {
        screen.textContent = content;
    }

    else {
        screen.textContent = screen.textContent += content;
    }  
}

function initializeProgram() {

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', (e) => {
        printScreen(e.target.textContent);
    }));

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    }));

    const equals = document.querySelector('.equals');
    equals.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    })
}
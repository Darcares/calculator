initializeProgram();


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


function initializeProgram() {

    const screen = document.querySelector('.screen');

    let operation = {
        numOne: null,
        numTwo: null,
        result: null,
        operator: null,
    };

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', (event) => {
        printScreen(event.target.textContent);
    }));

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', (event) => {
        assignElements(event);
    }));

    const equals = document.querySelector('.equals');
    equals.addEventListener('click', (event) => {
        console.log(event.target.textContent);
    })

    function assignElements(event) {
        operation.numOne = +screen.textContent;
        operation.operator = event.target.textContent;
        console.log(operation.numOne);
        console.log(operation.operator);
    }    

    function printScreen(content) {

        if(screen.textContent === '0') {
            screen.textContent = content;
        }

        else {
            screen.textContent = screen.textContent += content;
        }  
    }
}
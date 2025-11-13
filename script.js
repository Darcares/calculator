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
        assignOperationElements(event);
    }));

    const equals = document.querySelector('.equals');
    equals.addEventListener('click', (event) => {
        operate();
    })

    function assignOperationElements(event) {

        if(operation.numOne === null) {
            operation.numOne = +screen.textContent;
            operation.operator = event.target.textContent;
            screen.textContent = '0';
            console.log('NumOne: ' + operation.numOne);
            console.log('Operator: ' + operation.operator);
        }

        else if(operation.numOne !== null && operation.numTwo === null) {
            operation.numTwo = +screen.textContent;
            console.log('NumTwo: ' + operation.numTwo);
        }
    }    

    function printScreen(content) {

        if(screen.textContent === '0') {
            screen.textContent = content;
        }

        else {
            screen.textContent = screen.textContent += content;
        }  

        if(operation.result !== null) screen.textContent = operation.result;
    }

    function operate() {

        assignOperationElements();

        switch(operation.operator) {
            case "+":
            operation.result = add(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            chainOperation();
            break;

            case "-":
            operation.result = subtract(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            chainOperation();
            break;

            case "*":
            operation.result = multiply(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            chainOperation();
            break;

            case "/": 
            operation.result = divide(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            chainOperation();
            break;

            default:
            screen.textContent = "Error";
            break;
        }    
    }

    function chainOperation() {
        operation.numOne = operation.result;
        operation.numTwo = null;
        operation.result = null;
    }
}
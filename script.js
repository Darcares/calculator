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
        assignNumOneAndOperator(event);
    }));

    const equals = document.querySelector('.equals');
    equals.addEventListener('click', (event) => {
        operate();
    })

    function assignNumOneAndOperator(event) {
        operation.numOne = +screen.textContent;
        operation.operator = event.target.textContent;
        screen.textContent = '0';
        console.log(operation.numOne);
        console.log(operation.operator);
    }    

    function assignNumTwo() {
        operation.numTwo = +screen.textContent;
        console.log(operation.numTwo);
    }

    function printScreen(content) {

        if(screen.textContent === '0') {
            screen.textContent = content;
        }

        else {
            screen.textContent = screen.textContent += content;
        }  
    }

    function operate() {

        assignNumTwo();

        switch(operation.operator) {
            case "+":
            screen.textContent = add(operation.numOne,operation.numTwo);
            break;

            case "-":
            screen.textContent = subtract(operation.numOne,operation.numTwo);
            break;

            case "*":
            screen.textContent = multiply(operation.numOne,operation.numTwo);
            break;

            case "/": 
            screen.textContent = divide(operation.numOne,operation.numTwo);
            break;

            default:
            screen.textContent = "Error";
            break;
        }    
    }
}
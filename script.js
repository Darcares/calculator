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
        cleanScreen: false,
    };

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', printScreen));

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', assignOperationElements));
    
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', operate);

    const clear = document.querySelector('.clear');
    clear.addEventListener('click', clearProgram);

    const back = document.querySelector('.back');
    back.addEventListener('click', backspace);

    function clearProgram() {
        operation.numOne = null;
        operation.numTwo = null;
        operation.result = null;
        operation.operator = null;
        cleanScreen = false;
        screen.textContent = '0';
    }

    function backspace() {

        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
        if(screen.textContent < 1) screen.textContent = '0';
    
    }

    function assignOperationElements(event) {

        if(operation.numOne === null && operation.numTwo === null && operation.result === null && operation.operator === null) {
            operation.numOne = +screen.textContent;
            operation.operator = event.target.textContent;
            operation.cleanScreen = true;
            console.log('NumOne: ' + operation.numOne);
            console.log('Operator: ' + operation.operator);
        }

        else if(operation.numOne !== null && operation.numTwo === null && operation.result === null && operation.operator !== null && event.target.className === 'equals') {
            operation.numTwo = +screen.textContent;
            console.log('NumTwo: ' + operation.numTwo);
        }

        else if(operation.numOne !== null && operation.numTwo !== null && operation.result !== null && operation.operator !== null) {
            console.log('*************Chaining*************');
            operation.numOne = operation.result;
            operation.numTwo = null;
            operation.result = null;
            operation.operator = event.target.textContent;
            console.log('Num One: ' + operation.numOne);
            console.log('Operator: ' + operation.operator);
            operation.cleanScreen = true;
        }

        else if(operation.numOne !== null && operation.numTwo === null && operation.result === null && operation.operator !== null && event.target.className === 'operator') {
            console.log('Operate by operators, not equals.');
            operation.numTwo = +screen.textContent;
            console.log('NumTwo: ' + operation.numTwo);
            operate(event);
            assignOperationElements(event);
        }

        else {
            console.log('This is why I work');
        }
    }    

    function printScreen(event) {

        if(operation.result !== null) {
            screen.textContent = operation.result;
        }

        else {
            const content = event.target.textContent;

            if(operation.cleanScreen) { 
                screen.textContent = '';
                operation.cleanScreen = false; 
            }

            if(screen.textContent === '0') {
                screen.textContent = content;
            }

            else{
                screen.textContent = screen.textContent += content;
            }  

        }

    }

    function operate(event) {

        assignOperationElements(event);
        

        switch(operation.operator) {

            case "+":
            operation.result = add(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            break;

            case "-":
            operation.result = subtract(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            break;

            case "*":
            operation.result = multiply(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            break;

            case "/": 
            operation.result = divide(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            break;

            default:
            screen.textContent = "Error";
            break;
        }    
    }

}
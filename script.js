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

    const dot = document.querySelector('.dot');
    dot.addEventListener('click', printScreen);

    captureKeyboard();

    function clearProgram(event) {
        const content = (typeof event === 'object') ? event.target.className: event;
        if(content === 'clear' || content === 'Delete') {
            operation.numOne = null;
            operation.numTwo = null;
            operation.result = null;
            operation.operator = null;
            cleanScreen = false;
            screen.textContent = '0';
        }

        else {
            operation.numOne = null;
            operation.numTwo = null;
            operation.result = null;
            operation.operator = null;
            cleanScreen = false;
            screen.textContent = '0';
            printScreen(event);
        }
  
    }

    function backspace() {

        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
        if(screen.textContent < 1) screen.textContent = '0';
    
    }

    function assignOperationElements(event) {

        const content = (typeof event === 'object') ? event.target.className : event;

        if(operation.numOne === null && operation.numTwo === null && operation.result === null && operation.operator === null && (content === 'operator' || '/*-+'.includes(content))) {
            operation.numOne = +screen.textContent;
            operation.operator = (content === 'operator') ? event.target.textContent : content;
            operation.cleanScreen = true;
            console.log('NumOne: ' + operation.numOne);
            console.log('Operator: ' + operation.operator);
        }

        else if(operation.numOne !== null && operation.numTwo === null && operation.result === null && operation.operator !== null && (content === 'equals' || content === 'Enter') && operation.cleanScreen === false) {
            operation.numTwo = +screen.textContent;
            console.log('NumTwo: ' + operation.numTwo);
        }

        else if(operation.numOne !== null && operation.numTwo !== null && operation.result !== null && operation.operator !== null) {
            console.log('*************Chaining*************');
            operation.numOne = operation.result;
            operation.numTwo = null;
            operation.result = null;
            operation.operator = (content === 'operator') ? event.target.textContent : content;
            console.log('Num One: ' + operation.numOne);
            console.log('Operator: ' + operation.operator);
            operation.cleanScreen = true;
        }

        else if(operation.numOne !== null && operation.numTwo === null && operation.result === null && operation.operator !== null && (content === 'operator' || '/*-+'.includes(content)) && operation.cleanScreen === false) {
            console.log('Operate by operators, not equals.');
            operation.numTwo = +screen.textContent;
            console.log('NumTwo: ' + operation.numTwo);
            operate(event);
            assignOperationElements(event);
        }

        else if(operation.numOne !== null && operation.numTwo === null && operation.result === null && operation.operator !== null && (content === 'operator' || '/*-+'.includes(content)) && operation.cleanScreen === true) {
            console.log('Change operator');
            operation.operator = (content === 'operator') ? event.target.textContent : content;
        }

        else {
            console.log('This is why I work');
        }
    }    

    function printScreen(event) {

        if(operation.result !== null && operation.cleanScreen === false) {
            screen.textContent = operation.result;
            
        }

        else if(operation.result !== null && operation.cleanScreen === true) {
            clearProgram(event);
        }

        else {
            
            const content = (typeof event === "object") ? event.target.textContent : event;

            if(operation.cleanScreen) { 
                screen.textContent = '';
                operation.cleanScreen = false; 
            }

            if(screen.textContent === '0' && content !== '.') {
                screen.textContent = content;
            }

            else if(screen.textContent === '0' && content === '.'){
                screen.textContent = screen.textContent += content;
            }

            else if(screen.textContent.includes('.') && content === '.'){
                /* Empty block, nothing should be done here*/
            }

            else {
                screen.textContent = screen.textContent += content;
            }
    }
}
    function operate(event) {

        assignOperationElements(event);
        
        if(operation.numOne !== null && operation.numTwo !== null && operation.operator !== null) {
            
            switch(operation.operator) {

            case "+":
            operation.result = add(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            operation.cleanScreen = true;
            break;

            case "-":
            operation.result = subtract(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            operation.cleanScreen = true;
            break;

            case "*":
            operation.result = multiply(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            operation.cleanScreen = true;
            break;

            case "/": 
            operation.result = divide(operation.numOne,operation.numTwo);
            printScreen(operation.result);
            console.log('Result: ' + operation.result);
            operation.cleanScreen = true;
            break;

            default:
            screen.textContent = "Error";
            break;
            }  
        }
  
    }

    function captureKeyboard() {
        document.addEventListener('keydown', (event) => {

            if('0123456789.'.includes(event.key)) {
                printScreen(event.key);
            }

            else if('+-*/'.includes(event.key)) {
                assignOperationElements(event.key);
            }

            else if(event.key === 'Enter') {
                operate(event.key);
            }

            else if(event.key === 'Backspace') {
                backspace();
            }

            else if(event.key === 'Delete') {
                clearProgram(event.key);
            }
        });
    }

}
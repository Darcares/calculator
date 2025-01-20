function add(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
}

function operate(operator, firstOperand, secondOperand) {
    let result = null;

    switch(operator) {

        case "sum":
            result = add(firstOperand, secondOperand);
            break;
        
        case "subtraction":
            result = subtract(firstOperand, secondOperand);
            break;
        
        case "multiplication":
            result = multiply(firstOperand, secondOperand);
            break;

        case "division":
            result = divide(firstOperand, secondOperand);
            break;
        
        default:
            break;
    }
    screen.textContent = result;
    return result;
}

function updateScreen(event) {
    if(cleanScreen) {
        screen.textContent = ``;
        cleanScreen = false;  
    }   

    if(!(screen.textContent.includes(`.`) && event.target.textContent.includes(`.`))) screen.textContent += event.target.textContent;
    }

function assignOperands(event) {
    if(firstOperand === null) {
        firstOperand = +screen.textContent;
        cleanScreen = true;
    }

    else {
        secondOperand = +screen.textContent;
    }
    if(!(firstOperand === null && secondOperand === null && operator === null)) operate(operator, firstOperand, secondOperand);
    if(!(event.target.id === `equals`)) operator = event.target.id;
}

let firstOperand = null;
let secondOperand = null;
let operator = null;
let cleanScreen = false;
const digits = document.querySelectorAll(`.digit`);
const operators = document.querySelectorAll(`.operator`);
const equals = document.querySelector(`#equals`);
const screen = document.querySelector(`.screen`);
screen.textContent = `0`;
digits.forEach(digit => digit.addEventListener(`click`, event => updateScreen(event)));
operators.forEach(operator => operator.addEventListener(`click`, event => assignOperands(event)));
equals.addEventListener(`click`, (event) => {
    assignOperands(event);
    operate(operator, firstOperand, secondOperand);
});
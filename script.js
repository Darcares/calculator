function operate(operator, firstOperand, secondOperand) {
    let result = null;

    switch(operator) {

        case 10:
            result = firstOperand + secondOperand;
            break;
        
        case 20:
            result = firstOperand - secondOperand;
            break;
        
        case 30:
            result = firstOperand * secondOperand;
            break;

        case 40:
            result = firstOperand / secondOperand;
            break;
        
        default:
            break;
    }
    reInitialize(result);
}

function updateScreen(event) {
    if(isCleanScreenActive) {
        screen.textContent = ``;
        isCleanScreenActive = false;
        canSecondOperatorBeAssigned = true;
    }   

    if(!(screen.textContent.includes(`.`) && event.target.textContent.includes(`.`))) screen.textContent += event.target.textContent;
    }

function assignOperands(event) {
    if(firstOperand === null) {
        firstOperand = +screen.textContent;
        isCleanScreenActive = true;
    }

    else if(canSecondOperatorBeAssigned){
        secondOperand = +screen.textContent;
    }

    if(!(firstOperand === null) && !(secondOperand === null) && !(operator === null)) {
        operate(operator, firstOperand, secondOperand);
    }

    operator = +event.target.id;
}

function reInitialize(result) {
    screen.textContent = result;
    firstOperand = result;
    secondOperand = null;
    operator = null;
    isCleanScreenActive = true;
    canSecondOperatorBeAssigned = false;
}

function initialize() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    isCleanScreenActive = false;
    canSecondOperatorBeAssigned = false;
    screen.textContent = `0`;
}

const digits = document.querySelectorAll(`.digit`);
const operators = document.querySelectorAll(`.operator`);
const equals = document.querySelector(`#equals`);
const screen = document.querySelector(`.screen`);
const clear = document.querySelector(`#clear`);
let firstOperand = null;
let secondOperand = null;
let operator = null;
let isCleanScreenActive = false;
let canSecondOperatorBeAssigned = false;
screen.textContent = `0`;

clear.addEventListener(`click`, initialize);
digits.forEach(digit => digit.addEventListener(`click`, event => updateScreen(event)));
operators.forEach(operator => operator.addEventListener(`click`, event => assignOperands(event)));
equals.addEventListener(`click`, () => {
    if(canSecondOperatorBeAssigned) {
        secondOperand = +screen.textContent;
    }
    operate(operator, firstOperand, secondOperand);
});
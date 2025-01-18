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

function updateScreen(click) {
    (screen.textContent.includes(`.`) && click.target.textContent.includes(`.`)) ? screen.textContent: screen.textContent += click.target.textContent;
}

function assignOperands(click) {
    if(firstOperand === null) {
        firstOperand = +screen.textContent;
        screen.textContent = `0`;
    }
    else {
        secondOperand = +screen.textContent;
    }

    if(!(click.target.id === `equals`)) operator = click.target.id;
}

let firstOperand = null;
let secondOperand = null;
let operator = null;
const digits = document.querySelectorAll(`.digit`);
const operators = document.querySelectorAll(`.operator`);
const equals = document.querySelector(`#equals`);
const screen = document.querySelector(`.screen`);
screen.textContent = `0`;
digits.forEach(digit => digit.addEventListener(`click`, click => updateScreen(click)));
operators.forEach(operator => operator.addEventListener(`click`, click => assignOperands(click)));
equals.addEventListener(`click`, (click) => {
    assignOperands(click);
    operate(operator, firstOperand, secondOperand);
});
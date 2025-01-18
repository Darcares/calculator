function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    let result = null;

    switch(operator) {

        case 0:
            result = add(a, b);
            break;
        
        case 1:
            result = subtract(a, b);
            break;
        
        case 2:
            result = multiply(a, b);
            break;

        case 3:
            result = divide(a, b);
            break;
        
        default:
            break;
    }

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
}

let firstOperand = null;
let secondOperand = null;
const digits = document.querySelectorAll(`.digit`);
const operators = document.querySelectorAll(`.operator`);
const screen = document.querySelector(`.screen`);
screen.textContent = `0`;
digits.forEach(digit => digit.addEventListener(`click`, click => updateScreen(click)));
operators.forEach(operator => operator.addEventListener(`click`, click => assignOperands(click)));
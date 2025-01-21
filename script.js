initializeCalculator();

function add(firstOperand, secondOperand) {
    const result = (firstOperand + secondOperand);
    return result;
}

function subtract(firstOperand, secondOperand) {
    const result = (firstOperand - secondOperand);
    return result;
}

function multiply(firstOperand, secondOperand) {
    const result = (firstOperand * secondOperand);
    return result;
}

function divide(firstOperand, secondOperand) {
    const result = (firstOperand / secondOperand);
    return result;
}

function operate(event, screen, operation, permit) {

    switch(operation.operator) {

        case 10:
            operation.result = add(operation.firstOperand, operation.secondOperand);
            break;
        
        case 20:
            operation.result = subtract(operation.firstOperand, operation.secondOperand);
            break;
        
        case 30:
            operation.result = multiply(operation.firstOperand, operation.secondOperand);
            break;

        case 40:
            operation.result = divide(operation.firstOperand, operation.secondOperand);
            break;
        
        default:
            break;
    }
    console.table(operation);
    updateScreen(event, screen, operation, permit);
    chainOperations(operation, permit);
}

function initializeCalculator() {
    const operation = new Operation(null, null, null, null);
    const permit = new Permit(false, false);
    const digits = document.querySelectorAll(`.digit`);
    const operators = document.querySelectorAll(`.operator`);
    const equals = document.querySelector(`#equals`);
    const screen = document.querySelector(`#screen`);
    const clear = document.querySelector(`#clear`);
    screen.textContent = `0`;
    digits.forEach(digit => digit.addEventListener(`click`, event => updateScreen(event, screen, operation, permit)));
    operators.forEach(operator => operator.addEventListener(`click`, event => assignElements(event, screen, operation, permit)));
    equals.addEventListener(`click`, event => {

        if(permit.canBeSecondOperatorAssigned) {
            operation.secondOperand = +screen.textContent;
        }

        operate(event, screen, operation, permit);
    });
    clear.addEventListener(`click`, () => clearMemory(screen, operation, permit));
}

function updateScreen(event, screen, operation, permit) {
    if (permit.isCleanScreenActive) {
        screen.textContent = ``;
        permit.isCleanScreenActive = false;
        permit.canBeSecondOperatorAssigned = true;
    }

    if(+screen.textContent === 0) {
        screen.textContent =``;
    }
    
    if(!(screen.textContent.includes(`.`) && (event.target.id === `dot`))) {
        screen.textContent += event.target.textContent;
    }

    if(!(operation.result === null)) {
        screen.textContent = operation.result;
    }
}

function assignElements(event, screen, operation, permit) {
    if(operation.firstOperand === null) {
        operation.firstOperand = +screen.textContent;
        permit.isCleanScreenActive = true;
    }

    else if(permit.canBeSecondOperatorAssigned) {
        operation.secondOperand = +screen.textContent;
    }

    if(!(operation.firstOperand === null) && !(operation.secondOperand === null) && !(operation.operator === null)) operate(event, screen, operation, permit);

    operation.operator = +event.target.id;
}

function chainOperations(operation, permit) {
    operation.firstOperand = operation.result;
    operation.secondOperand = null;
    operation.result = null;
    permit.isCleanScreenActive = true;
    permit.canBeSecondOperatorAssigned = false;
}

function clearMemory(screen, operation, permit) {
    for(key in operation) {
        operation[key] = null;
    }

    for(key in permit) {
        permit[key] = null;
    }

    screen.textContent = `0`;
}

function Operation(operator, firstOperand, secondOperand, result){
    this.operator = operator;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.result = result;
}

function Permit(isCleanScreenActive, canBeSecondOperatorAssigned) {
    this.isCleanScreenActive = isCleanScreenActive;
    this.canBeSecondOperatorAssigned = canBeSecondOperatorAssigned;
}

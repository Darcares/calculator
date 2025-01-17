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
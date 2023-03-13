// Operator functions 

function add(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide (a,b) {
    if (b==0) {
        return 'Can\'t divide by 0';
    }

    else {
        return a/b;
    }
}

// operate function to input operator, num1, and num2 together

function operate(operator, num1, num2) {
    switch(operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        return "Invalid operator";
    }
}

// Trigger operator function when clicking equal sign
const equalSign = document.querySelector('.equal');
equalSign.addEventListener('click', () => {
    operate();
});

// Set empty values to variables. When clicking any operator or number
// it will replace the empty strings

let operator = ''

let num1 = ''

let num2 = ''


// Replace operator variable with operator symbol on button event

const addSign = document.querySelector('.add');
addSign.addEventListener('click', () => {
    operator += '+'
});


// Replace num1 and num2 when number buttons are pressed 
// Have to figure out how to do numbers greater than 10 and break on if statement 



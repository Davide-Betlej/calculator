const displayWindow = document.querySelector('#display');
const valueButtons = document.querySelectorAll('button.value');
const operatorButtons = document.querySelectorAll('button.operator');
const deleteButton = document.querySelector('button.delete')
const clearButton = document.querySelector('button.clear');
const equalsButton = document.querySelector('button.equals');
const decimalButton = document.querySelector('button.decimal')
equalsButton.addEventListener('click', evalue);
deleteButton.addEventListener('click', deleteLast);
clearButton.addEventListener('click', clearAll);
decimalButton.addEventListener('click', appendDecimal)


operatorButtons.forEach(operator => 
    operator.addEventListener('click', () => setOperation(operator.value))
);
        

valueButtons.forEach(button => 
    button.addEventListener('click', () => appendValue(button.value))
);


let currentValue
let currentOperator = null
let secondValue

function appendValue(number) {
    if (displayWindow.textContent == "0") {
        displayWindow.textContent = ""
    }
    displayWindow.textContent += `${number}`
}

function setOperation(operator) {
    if (currentOperator !== null) evalue();
    currentValue = displayWindow.textContent;
    currentOperator = operator
    clearScreen();
}

function evalue() {
    if (currentOperator === null) return;
    if (currentOperator === "/" && displayWindow.textContent === "0") {
        alert("Are you kidding me? What did they teach you in school?");
        clearAll();
        return
    }
    secondValue = displayWindow.textContent
    displayWindow.textContent = roundNumbers(
        operate(currentOperator, currentValue, secondValue)
    );
    currentOperator = null;
}

function appendDecimal() {
    if (displayWindow.textContent === "") {
        displayWindow.textContent = "0"
    }
    if (displayWindow.textContent.includes(".")) {
        return
    }
    displayWindow.textContent += ".";
}

function roundNumbers(number) {
    return Math.round(number * 1000) / 1000;
}

function clearScreen() {
    displayWindow.textContent = "";
}

function deleteLast () {
    displayWindow.textContent = displayWindow.textContent.slice(0, -1)
    if (displayWindow.textContent == "") {
        displayWindow.textContent = "0"
    }
}

function clearAll() {
    currentValue = ""
    currentOperator = null
    displayWindow.textContent = "0"
    secondValue = ""
}

function add(a, b) {
    return a + b
};

function substract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide (a, b) {
    return a / b
};

function operate (operator, a, b){
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default: {
            return null;
        }
    }
}
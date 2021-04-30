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
            if (a === 0 || b === 0) {
                alert("Are you kidding me? What did they teach you in school?")
            }
            return divide(a, b);
        default: {
            return null;
        }
    }
}
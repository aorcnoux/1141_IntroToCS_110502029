const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operatorSelect = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");
const resultText = document.getElementById("result");

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
    if (b === 0) {
        return NaN;  
    }
    return a / b;
}


function calculate() {
    const a = Number(number1Input.value);
    const b = Number(number2Input.value);
    const op = operatorSelect.value;

    if (number1Input.value === "" || number2Input.value === "" || isNaN(a) || isNaN(b)) {
        resultText.textContent = "Result = Error (please enter two numbers)";
        return;
    }

    let result;

    if (op === "+") {
        result = add(a, b);
    } else if (op === "-") {
        result = subtract(a, b);
    } else if (op === "*") {
        result = multiply(a, b);
    } else if (op === "/") {
        result = divide(a, b);
    }

    if (isNaN(result)) {
        resultText.textContent = "Result = Error (invalid operation)";
        return;
    }

    resultText.textContent = "Result = " + result.toFixed(2);
}

calcBtn.addEventListener("click", calculate);

operatorSelect.addEventListener("change", function () {
    const op = operatorSelect.value;
    if (op === "+") {
        calcBtn.textContent = "Add";
    } else if (op === "-") {
        calcBtn.textContent = "Subtract";
    } else if (op === "*") {
        calcBtn.textContent = "Multiply";
    } else if (op === "/") {
        calcBtn.textContent = "Divide";
    }
});

function appendNumber(number) {
    const display = document.getElementById('display');
    display.textContent += number;
}   
function setOperation(operator) {
    const display = document.getElementById('display');
    display.textContent += operator;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.textContent;

    // Study the difference between eval and Function constructor

    try {
        // Using Function constructor to evaluate the expression safely
        const result = new Function('return ' + expression)();
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
    // calculate the result by taking the expression from the display
    // without using eval for security reasons
}
function appendDecimal() {
    const display = document.getElementById('display');
    display.value += '.';
}   


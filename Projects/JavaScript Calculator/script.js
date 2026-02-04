function appendNumber(number) {
    const display = document.getElementById('display');
    display.textContent += number;
}   
function setOperation(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }   
}
function appendDecimal() {
    const display = document.getElementById('display');
    display.value += '.';
}   


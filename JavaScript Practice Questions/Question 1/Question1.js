function checkEvenOdd(){
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    if (number % 2 === 0) {
        alert(`${number} is an even number.`);
    } else {
        alert(`${number} is an odd number.`);
    }
}

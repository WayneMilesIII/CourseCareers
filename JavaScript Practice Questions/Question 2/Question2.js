function findlargestNumber() {
    const firstInputNumber = document.getElementById("firstNumberInput").value;
    const secondInputNumber = document.getElementById("secondNumberInput").value;
    const thirdInputNumber = document.getElementById("thirdNumberInput").value;
    const numbersArray = [
        parseFloat(firstInputNumber),
        parseFloat(secondInputNumber),
        parseFloat(thirdInputNumber)
    ];

    // Check if all inputs are empty or invalid || Can't seem to find a way to return null for empty inputs
    if ((numbersArray.length === 0) || numbersArray.some(isNaN)) {
        return alert('Must enter 3 numbers'); // Return null for empty array
    }   

    let largest = numbersArray[0];
    
    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > largest) {
            largest = numbersArray[i];
        }
    }
    return alert(`${largest} was the largest number.`)
}

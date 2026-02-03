/* Q2. Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.
   Example:
    Input: [1, 2, 3, 4, 5, 6]    
    Output: 12 (2 + 4 + 6)
*/

function sumEvenNumbers(numbers){

    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            sum += numbers[i];
        }
}
    console.log(sum);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]); // 12
sumEvenNumbers([2, 4, 6, 8, 10]) // 30
sumEvenNumbers([1, 3, 5, 7, 9]) // 0
sumEvenNumbers([-2, -4, -6, -8, -10]) // -30
sumEvenNumbers([0, 1, 2, 3, 4]) // 6
sumEvenNumbers([11, 22, 33, 44, 55]) // 66
function mathisFun(numberString){
    delimiter = "|";
    let numbers = numberString.split(delimiter);   
    console.log(numbers);
    let largestSum = Number.NEGATIVE_INFINITY; //some very small number to ensure any sum is larger
    let sum = 0;

    // find the largest sum of two numbers
    for(let i = 0; i < numbers.length; i++){
       for(let j = i + 1; j < numbers.length; j++){
           sum = parseInt(numbers[i]) + parseInt(numbers[j]);
           console.log(`Sum of ${numbers[i]} and ${numbers[j]} is: ${sum}`);
            if (largestSum < sum){
                largestSum = sum;
            }
        }
}

return console.log(largestSum);

}

mathisFun("-2|-2|-1|-1");
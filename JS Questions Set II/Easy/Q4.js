/*
Create a function findLongestWord that accepts a string as input and returns the longest
word in the string. Assume the string will only contain words separated by spaces and
no punctuation or special characters. In case of a tie, return the word that appears first.

For an added challenge: do NOT use the .split() method to solve this problem.
*/
function findLongestWord(inputString) {
    let longestWord = "";
    let currentWord = "";
    let firstWord = "";
    for (let i = 0; i <= inputString.length; i++) {
        const char = inputString[i] || " "; // Treat end of string as space
        if (char !== " ") {
            currentWord += char;
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            if (!firstWord) {
                firstWord = longestWord;
            }
            currentWord = "";
        }
    }
    if (longestWord.length > firstWord.length) {
        console.log(longestWord);
    } else {
    console.log(firstWord);
}
}
findLongestWord("The quick brown fox jumps over the lazy dog"); // quick
findLongestWord("JavaScript is a versatile programming language"); // programming
findLongestWord("To be or not to be that is the question"); // question
findLongestWord("A journey of a thousand miles begins with a single step"); // thousand
findLongestWord("Stay hungry stay foolish"); // foolish
findLongestWord("Sustainability encompasses various initiatives and strategies to maintain ecological balance.") // Sustainability
findLongestWord("An exploration of quantum computing reveals intricacies within computational theories.") // computational
findLongestWord("Innovative technological advancements revolutionize traditional methodologies in various sectors.") // Technological
findLongestWord("Understanding the complexities of neural networks requires a deep dive into artificial intelligence.") //Understanding
findLongestWord("The philosophical implications of virtual reality technology challenge our perception of existence.") // Philosophical
findLongestWord("one more") // more
findLongestWord("") // ""
findLongestWord("tie dog") // tie
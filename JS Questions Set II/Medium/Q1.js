/* 
Write a JavaScript function named findUniqueCharacters that takes a string as input
and returns a string containing only the unique characters from the input, in the order
they first appeared. A character is considered unique if it appears exactly once in the
input string.
For example:
Input: "bubble"
Output: "ule"
*/

function findUniqueCharacters(inputString) {
    let charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let uniqueChars = "";
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (charCount[char] === 1) {
            uniqueChars += char;
        }
    }
    console.log(uniqueChars);
}
findUniqueCharacters("bubble"); // "ule"
findUniqueCharacters("swiss"); // "wi"
findUniqueCharacters("abcdef"); // "abcdef"
findUniqueCharacters("aabbccdd"); // ""
findUniqueCharacters(""); // ""
findUniqueCharacters("!a b c! a"); // "bc"
findUniqueCharacters("123412345"); // "5"
findUniqueCharacters("AaBbCc"); // "AaBbCc"

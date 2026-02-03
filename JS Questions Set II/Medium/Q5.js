/* 
    Write a JavaScript function named isPalindrome that checks if a given string is a
palindrome. A palindrome is a word, phrase, number, or other sequences of characters
that reads the same forward and backward (ignoring spaces, punctuation, and
capitalization). The function should return true if the input string is a palindrome and
false otherwise.
    For example:
    Input: "A man, a plan, a canal, Panama"
    Output: true
*/

function isPalindrome(inputString) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = normalizedString.length; 
    for (let i = 0; i < length / 2; i++) {
        if (normalizedString[i] !== normalizedString[length - 1 - i]) {
            console.log(false);
            return;
        }   
    }
    console.log(true);
}
isPalindrome("");
isPalindrome("a");
isPalindrome("Madam, I'm Adam.");
isPalindrome("ab");
isPalindrome("12321! #@!12321");
isPalindrome("javascript")
isPalindrome("!!a!!!a!")


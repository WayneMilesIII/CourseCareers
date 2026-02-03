/*
    Develop a function countVowelsAndConsonants that accepts a string as input and
    returns an object with two properties: vowels and consonants. The properties should
    count the number of vowels and consonants in the string, respectively. Assume the
    string will only contain lowercase or uppercase letters and no spaces or special
    characters.
    For this problem the vowels are the lowercase or uppercase version of: "a", "e", "i", "o",
    "u". Do NOT include “y”
*/

function countVowelsAndConsonants(inputString) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
            if (vowels.indexOf(char) !== -1) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}

countVowelsAndConsonants("HelloWorld"); // Vowels: 3, Consonants: 7
countVowelsAndConsonants("JavaScript"); // Vowels: 3, Consonants: 7
countVowelsAndConsonants("AEIOUaeiou"); // Vowels: 10, Consonants: 0
countVowelsAndConsonants("BCDFGHJKLMNPQRSTVWXYZ"); // Vowels: 0, Consonants: 21
countVowelsAndConsonants("ProgrammingInJavaScript"); // Vowels: 7, Consonants: 16
countVowelsAndConsonants("ExampleOfMixedCase"); // Vowels: 8, Consonants: 10
countVowelsAndConsonants("FUNCTIONALprogramming"); // Vowels: 7, Consonants: 14
countVowelsAndConsonants("DataStructuresAndAlgorithms"); // Vowels: 9, Consonants: 18
countVowelsAndConsonants("UnderstandingComplexity"); // Vowels: 7, Consonants: 16
countVowelsAndConsonants("AbstractSyntaxTreeAnalysis"); // Vowels: 8, Consonants: 18
countVowelsAndConsonants("hkjahkdjsaidewyHHSAKHAvasldjasbbvAASS"); // Vowels: 10, Consonants: 27
countVowelsAndConsonants(""); // Vowels: 0, Consonants: 0
countVowelsAndConsonants("aeiou"); // Vowels: 5, Consonants: 0
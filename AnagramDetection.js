/**
 * Purpose: An Anagram Detection Example
 * 
 * @author Swati Desale
 *
 */
var readline = require('readline');
var common = require('/home/bridgeit/Desktop/Swati/Utility/utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to print anagram strings.
 * 
 * @param str1 contains first string.
 * @param str2 contains second string.
 */
function anagram() {
    read.question("Enter first String : ",(str1) => {
        if(str1) {
            read.question("Enter second String : ",(str2) => {
                var result = common.anagramDetection(str1,str2);
                if(result == true)
                    console.log("Strings are Anagram");
                else
                    console.log("Strings are Not Anagrams");
            });
        }
    });
}

anagram();


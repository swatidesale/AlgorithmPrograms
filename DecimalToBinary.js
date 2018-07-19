/**
 * Purpose: To print the binary (base 2) representation of the decimal number
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
 * Function that outputs the binary (base 2) representation of the decimal number
 * 
 * @param decimal contains decimal value to convert into binary.
 */
function decimalToBinary() {
    read.question("Enter decimal number : ",(decimal) => {
        var binary = common.toBinary(decimal);
        console.log("Decimal To Binary : "+binary);
        read.close();
    });
}

decimalToBinary();
/**
 * Purpose: Question to find your number.
 * 
 * @author Swati Desale
 *
 */
var readline = require('readline');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to read user number.
 * 
 * @param n contains value of number to find.
 */
function yourNumber() {
    read.question("Enter value of N : ",(n) => {
        var range = Math.pow(2,n);
        findNumber(0,range);
    });
}

/*
 * Function to find your number.
 * 
 * @param i contains value of lower number.
 * @param range contains value of range.
 */
function findNumber(i,range) {
    first = i;
    last = range;

    if(first == last) {
        console.log("Your Number is: "+first);
        console.log("Intermediary Numbers : "+(first-1)+" and "+(first+1));
        return;
    }
    var mid = parseInt((Number(first)+Number(last))/2);
    read.question(`Enter 1 : ${first}-${mid} : \nEnter 2 : ${mid+1}-${last} : \n`,(number) => {
        if(number == 1){
            findNumber(first, mid);
        }
        else if(number == 2)
            findNumber(Number(mid+1), last);
    });
}

yourNumber();
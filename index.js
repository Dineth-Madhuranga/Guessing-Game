
/*The parseInt() function parses a string and returns an integer. The radix parameter is used to 
specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that 
the number in the string should be parsed from a hexadecimal number to a decimal number.*/

let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:');
    } else {
        guess = prompt('Too low! Enter a new guess:');
    }
}
if (guess === 'q') {
    console.log('You quit!');
} else {
    console.log('Congrats! You win!');
}
console.log(`You got it! It took you ${attempts} guesses!`);
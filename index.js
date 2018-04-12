// Load the NPM Package inquirer
var inquirer = require("inquirer");
var Word = require("./word.js");


// var letter = new Letter ("d");
// console.log (letter.char);
// console.log (letter.guessed);
// console.log (letter.toString());

// Create a "Prompt" ask for a letter

// set in a function
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "guess a letter",
//       name: "guess"
//     }
// ])
// .then(function(inquirerResponse) {
//     console.log("\n You guessed " + inquirerResponse.guess);

    // letter.checkGuess (inquirerResponse.guess);

    // console.log (letter.char);
    // console.log (letter.guessed);
    // console.log (letter.toString());
    
// });

var testWord = new Word("happy");
console.log (testWord.printWord() );
testWord.guessLetter("k");
console.log (testWord.printWord() );
testWord.guessLetter("p");
console.log (testWord.printWord() );

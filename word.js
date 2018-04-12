var Letter = require("./letter.js");


// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is 
// attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the 
// function on each letter object (the first function defined in Letter.js) that 
// displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on 
// each letter object (the second function defined in Letter.js)

var Word = function (randomWord) {
    this.word = randomWord;
    this.splitWord=this.word.split("");

    // lettersArray is the letter from word.
    // create new array with map.
    this.lettersArray = this.splitWord.map(function (char){
        return new Letter(char);
    });


};
// guessLetter is checking the user guess against the char.
Word.prototype.guessLetter = function (guess) {
    var match = false;
    for (let i = 0; i < this.lettersArray.length; i++) {
        if (this.lettersArray[i].checkGuess(guess)) {
            match = true;
        }

    };
    return match;
};

Word.prototype.printWord = function () {
   return this.lettersArray.join(" ");
    

};


module.exports = Word;
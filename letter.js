// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an 
// underlying character or a blank placeholder (such as an underscore), depending on 
// whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder 
// (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly




// var wordArray = ["copper", "explain", "truck", "unite", "brunch", "educated", "tenuous", "decisive", "notice", "flabbergasted", "confuse", "valuable", "grandfather", "drawer", "earsplitting", "halting", "canter", "royalty", "spooky", "fellowship", "hobbit", "predator"];
// how many words in wordArray?
// console.log (wordArray.length);

// test wordArray
// console.log (wordArray[2]);

// picks word from Array
// var word = wordArray[Math.floor((Math.random() * 20))];
// console.log(word);

// need to change userGuess to inquirer guess
// var userGuess = process.argv[2];

// var letter = "";
// var guessed = false;
// guessesLeft = word.length;
// console.log(guessesLeft);

// char from our word.  the individual character from the computer generated word. 
var Letter = function (char) {
    this.char = char;
    this.guessed = false;
    // this.guessesLeft=guessesLeft;


};


Letter.prototype.toString = function () {
    if (this.guessed===true) {
        return this.char;
    }
    return "_";
};

Letter.prototype.checkGuess = function (userChar) {
    if (this.char.toLowerCase() === userChar.toLowerCase()) {
        this.guessed = true;
        return true;
    };
    return false;


    // go through word and match letter
    // for (i=0; i<=word.length; i++) {
    //     if (userGuess = word.indexOf(i)) {
    //         console.log (word.indexOf(i));
    //         this.guessed = true;
    //     } else {
    //         guessesLeft --;
    //         console.log("That is incorrect! Only " +guessesLeft + " left!")

    //     };

    // };
};

module.exports=Letter;


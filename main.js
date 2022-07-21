'use strict';

//pick a word for player to guess
let word = 'citrus'

//create variable to represent letter spaces = empty array
let answerArray = [];
console.log(answerArray)

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

//create arrays for wrong guesses
let wrongGuess = [];

//user inputs a guess--loop through the word to see if letter matches any letter in my word
const guessedLetter = () => {
for (let i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter){
        guess[i].push
        console.log(guessedLetter)
}
}
}

//if theres a match, input the letter at the corresponding index of variable-word 

//if no match, alert 'try again'


//create a counter for turns left

//if out of turns, alert 'try again'
// alert.

//if a win, alert 'congrats'
// alert.





//fxn for looping through our word and the guessed letter
// for (var i = 0; i < word.length; i++) {
//     if (word[i] === guess) { //compare the letter guessed to value in each index of the word youre solving
//       guesses[i].innerHTML = guess; //add the guess to the baord at the same index as the word ...if true splice(add) letter into whatever index of guesses array
//     } 
//   }


// const getPrompt = () => {
//     console.log( guess(word));
//     getPrompt();
// };

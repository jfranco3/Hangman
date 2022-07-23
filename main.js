//pick a word for player to guess
let word = 'citrus';
// console.log("ANSWER:", word)

//create variable to represent letter spaces using _'s in array 
let board = ["_", "_", "_", "_", "_", "_",];
console.log("GAME SPACES", board)

//create turns allowed
let guessesAllowed = 10

//user inputs a guess
let guessLetter = prompt("USER GUESS", 'Guess a Letter')
// console.log ("YOU GUESSED:", guessLetter)

//loop through the word to see if guess is correct
while (guessesAllowed) {
  let guessLetterIndex = word.indexOf(guessLetter)
  // console.log("GUESSED LETTER", 'guessLetter')

  if (guessLetterIndex > -1) {
    board.splice(guessLetterIndex, 1, guessLetter)
  }
console.log("GAME SPACES", board)

  //if guess is not in board
  if (guessLetterIndex === -1) {
    guessesAllowed--
console.log("WRONG GUESS, TRY AGAIN", guessLetterIndex)
  }

  //if a win 
  if (!board.includes("_")) {
    return console.log("WIN!", 'You Guessed it! The word is ' +       word)
  }
console.log("GAME SPACES", board)

  guessLetter = prompt("Guess A Letter")
}
// console.log("NO MORE TURNS", 'You ran out of turns. Try Again!')
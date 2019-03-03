/** A Guessing game by Jiten Mehta.

This is a game where the user_answer
has to guess a number between 1-6. If the guess is wrong, the user has a seconed chance.
A prompt box will give a clue to the user if the seconed guess is incorrect.
There are only 2 outcomes after the seconed guess. Succeed or fail.**/

// assume the player guess incorrectly
var correct_guess = false;

// randomly generating a number between 1 and 6
var random_number =  Math.floor(Math.random() * 6) + 1;

// prompt box where user inputs a number
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');


/*******************************************************************************
************* -- conditional statements -- ************************************/

// Correct guess on first go
if (parseInt(guess) === random_number){
  correct_guess = true;

// seconed guess. Clue to the user if the random number is more than the guess
} else if ( parseInt(guess) < random_number ) {
  var guessmore = prompt('Try again. The number I am thinking of is more than ' + guess);
  if (parseInt(guess) === random_number){
    correct_guess = true;
  }
}

// seconed guess. Clue to the user if the random number is less than the guess
else if ( parseInt(guess) > random_number ) {
  var guessmore = prompt(' Try agan. The number I am thinking of is less than ' + guess);
  if (parseInt(guess) === random_number){
    correct_guess = true;
  }
}

// print message if the uesr wins
if ( correct_guess) {
  document.write('<h2>Well done. You have guessed the correct number</h2>');
}

// print message if the user looses
else {
  document.write('<h2> Sorry you guessed wrong numer. The right number was ' + random_number +
  '. Better luck next time</h2>');
}

// var user_answer = prompt(' What programming language is the name of a gem?');
//
// if ( user_answer.toUpperCase () === 'RUBY' ){
//   document.write('<p>That\'s right!');
// }
// else {
//   document.write('<p>Sorry.That answer is incorrect. Please try again.');
//   }

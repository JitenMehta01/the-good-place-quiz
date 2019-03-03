/** A Guessing game by Jiten Mehta.

A Simple quix game where the user has to answer five questions.
The user will be given a rank once the quix has finished
**/

// Default user score
var user_score = 0;

// questions for the user

// question 1 = prompt
var question_1 = prompt(' What is the first-name of the lead character in the show \"The good place?\" ');
if (question_1.toUpperCase () === 'ELEANOR'){
  user_score += 1;
}

// question 2 + prompt
var question_2 = prompt(' What was Chidi\'s Occupation before he died?');
if (question_2.toUpperCase() === 'ETHIC PROFESSOR'){
  user_score += 1;
}

// question 3 + prompt
var question_3 = prompt(' What is the name of the demon architect who designed a fake good place?')
if (question_3.toUpperCase() === 'MICHAEL'){
  user_score += 1;
}


// question 4 + prompt
var question_4 = prompt(' What is the name of the women who lives in the meduim place?')
if (question_4.toUpperCase() === 'MINDY'){
  user_score += 1;
}

// question 5 + prompt
var question_5 = prompt(' What is the character name of the AI in the good place?  ');
if (question_5.toUpperCase() === 'JANET'){
  user_score += 1;
}

// output results
document.write('<h2>Well done! You got ' + user_score + ' out 5 questions right.</h2>');

// output rank

// gold medal
if (user_score === 5){
  document.write('<h3>Well done you got a perfect score. You get the <strong>gold</strong> medal</h3>');
}

// silver medal

else if (user_score >= 3 ){
  document.write('<h3>Well done you got ' + user_score + ' out of 5 questions right! You get the <strong>Silver</strong> medal</h3>');
}

// bronze medal
else if (user_score >= 1){
  document. write('<h3>Well done you get ' + user_score + ' out of 5 questions right! You get the <strong>bronze</strong> medal</h3>');
}

// zero
else {
  document.write('<h3>You clearly don\'t watch the show. You belong in the bad place</h3> ');
}

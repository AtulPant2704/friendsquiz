var readlineSync = require("readline-sync");

var score = 0;

var userName;

var highScore={
    name: "Atul",
    score: 3,
  }

var questions = [{
  question: "Where do I live? ",
  answer: "Kotdwara"
}, {
  question: "My favorite city where I want to work at? ",
  answer: "NYC"
},
{
  question: "My favourite social media platform? ",
  answer: "YouTube"
},
{
  question: "My favourite batsman in Indian Cricket team? ",
  answer: "Rohit Sharma"
},
{
  question: "What I want to be? ",
  answer: "Software Engineer"
}];

function welcome() {
 userName = readlineSync.question("What's your name? ");
 console.log("Welcome "+ userName + " to Atul's quiz!");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
   
  }

  console.log("Current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  if(score>highScore.score){
    highScore.name=userName;
    highScore.score=score;
    console.log("This is the new high score!!");
    console.log("Name: " + userName + " New High Score: " + score);
  }
}


welcome();
game();
showScores();
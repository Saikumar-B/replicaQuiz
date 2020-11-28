var readlineSync = require('readline-sync');
var score=0;

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer){
    score++;
    console.log("You are right!");
    console.log("Your Current Score: "+score);
  }
  else{
    console.log("You missed it!");
  }
}

quiz("which team won ipl 2020 trophy? ", "mumbai indians");
quiz("who is captain of Chennai Super Kings? ", "dhoni");

console.log("Yay! Your total Score is: "+score);
$(document).ready(function(){
  newGame();
})


var questions = [
    {
    //1
    ques: "What was the first game ever released on Nintendo 64?",  
    ans: ["Super Mario 64", "GoldenEye", "Donkey Kong", "Star Fox 64"],
    correct: 0
    },
    {
    //2
    ques: "In this platforming game, a duo collects puzzle pieces to in a jouney to defeat the evil witch",
    ans: ["Kirby 64", "Paper Mario", "Banjo and Kazooie", "Donkey Kong 64"],
    correct: 3
    },
    {
    //3
    ques: "Do a Barrel Roll! Was popularized by which Star Fox 64 character?",
    ans: ["Star Fox", "Slippy Toad", "Falco Lombardi", "Peppy Hare"],
    correct: 4
    },
    {
    //4
    ques: "This game development company was known for creating a list of classics including, Donkey Kong 64, GoldenEye, and Perfect Dark",
    ans: ["HAL Laboratory", "Rare", "3D Realms", "Capcom"],
    correct: 2
    },
    {
    //5
    ques: "This sword weilding hero is on a quest to save the princess and defeat ganondorf",
    ans: ["Zelda", "Link", "Conker", "Gex"],
    correct: 2
    }
];


//messages
var message = [{
  correct: "You got it!",
  incorrect: "Sorry!",
  time: "Sorry out to time!"
}]

//Set Global Variables

var currentQuestion;
var numCorrect;
var numWrong;

//New game conditions function
function newGame(){
  $("#questionArea").empty()
  $("#messageArea").empty()
  $("#answerArea").empty()
  currentQuestion = 0;
  numCorrect = 0;
  numWrong = 0;
  addQuestion();

}
//add question & answers to page
function addQuestion(){
  $("#questionArea").html(questions[currentQuestion].ques);
}

//timer

//answer selection

//answer display

//win conditions

//reset


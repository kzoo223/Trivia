$(document).ready(function(){
  newGame();
})


//messages--------------------------
var message = {
  correct: "You got it!",
  incorrect: "Sorry!",
  time: "Sorry out of time!"
};

//question & answer array-------------------------------------------
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




//Set Global Variables---------------------------------------

var currentQuestion;
var numCorrect;
var numWrong;
var questionCounter

//New game conditions function--------------------------------
function newGame(){
  $("#questionArea").empty()
  $("#messageArea").empty()
  $("#answerArea").empty()
  currentQuestion = 0;
  numCorrect = 0;
  numWrong = 0;
  addQuestion();
}

//timer----------------------------------------------------

var seconds = 1

function timer(){
    timer = setInterval(decrement, 1000);
}

//setting for timer decrease
function decrement(){
  $("#timerArea").html("Time remaining: " + seconds)
  seconds--
  if (seconds == -1){
  $("#messageArea").html(message.time);
  clearInterval(timer);
  answer();
  }
}

//add question & answers to page-----------------------------------------
function addQuestion(){
  $("#questionArea").html(questions[currentQuestion].ques);
  for (i=0; i<4; i++){
    var answerChoice = $("<div>")
    answerChoice.text(questions[currentQuestion].ans[i])
    answerChoice.addClass("yourChoice")
    answerChoice.attr({'data-zindex': i });
    $("#answerArea").append(answerChoice)
  }
  timer();
  //Set Onclick for answer divs------------------------------------------
  $('.yourChoice').on('click',function(){
    answerSelection = $(this).data('zindex');
    clearInterval(timer);
    answer();
  });
}



//answer display
function answer(){
  $('.yourChoice').empty();
  $("#questionArea").empty();
  var ansIndex = questions[currentQuestion].correct
  var ansText = questions[currentQuestion].ans[questions[currentQuestion].ans];
  
  if((answerSelection == ansIndex) && (seconds > 0)){
    $("#answerArea").html(message.correct)  
    numCorrect++
  }
 
  else{
    $("#answerArea").html(message.incorrect)
  }
    numWrong++

};

//end game conditions ----- keept track of current question
function questionTally(){

}

//reset


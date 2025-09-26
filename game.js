// alert("hello")

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;

$(document).keypress(function() {
nextSequence();
$("h1").text("Level "+level);
});


function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
    
}

$(".btn").off("click").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
    $("."+currentColour).removeClass("pressed");
}, 100);
}

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length) {
         setTimeout(function(){
        nextSequence();},1000);}
    }
   else {
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    $("h1").text("Game Over, Press Any Key to Restart , Highest level is : Level "+ level);
    startOver();
  }
}

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0 ;
}



// function nextSequence(){
// var random = Math.floor((Math.random()*4));
//  return random;
// }

// var randomNumber = nextSequence();

// if (randomNumber === 0){
//   var randomChosenColour = buttonColours[0];
// }
// if (randomNumber === 1){
//   var randomChosenColour = buttonColours[1];
// }
// if (randomNumber === 2){
//   var randomChosenColour = buttonColours[2];
// }
// if (randomNumber === 3){
//   var randomChosenColour = buttonColours[3];
// }

// gamePattern = gamePattern.push(randomChosenColour);


//declare variables
var wins = 0;
var lose = 0;
var finalScore = 0;

//random target number 19-120
var targetNumber = Math.floor(Math.random() * 120 + 19);

//$(".target-number").Html(targetNumber)

console.log ("target number is " + targetNumber)

//random number for crystals

var crystal1 = Math.floor(Math.random() * 12 + 1)
var crystal2 = Math.floor(Math.random() * 12 + 1)
var crystal3 = Math.floor(Math.random() * 12 + 1)
var crystal4 = Math.floor(Math.random() * 12 + 1)

console.log("Amethyst is " + crystal1)
console.log("Clear Quartz is " + crystal2)
console.log("Rose Quartz is " + crystal3)
console.log("Tiger's Eye is " + crystal4)

//make crystal images buttons
//restart game if win/lose

var restart = function () {
    finalScore = 0;
    targetNumber = Math.floor(Math.random() * 120 + 19)

    var crystal1 = Math.floor(Math.random() * 12 + 1)
    var crystal2 = Math.floor(Math.random() * 12 + 1)
    var crystal3 = Math.floor(Math.random() * 12 + 1)
    var crystal4 = Math.floor(Math.random() * 12 + 1)
}

//write win/loss/score

var updateScore = function() {
    $(".totalScoreNumber").empty();
    $(".totalScoreNumber").append(finalScore)
}


//Win/Lose statements
var WinLose = function () {
    if(finalScore === targetNumber){
    alert("You Win!");
    wins = wins + 1;
    restart();
}

else if (finalScore > targetNumber) {
    alert("You Lose!");
    lose = lose + 1;
    restart ()
}

}





//click buttons

$(document).ready(function(){

    $(".crystal1").click(function(){
        
        console.log(finalScore = finalScore + crystal1)
    })

    $(".crystal2").click(function(){
        console.log(finalScore = finalScore + crystal2)
    })

    $(".crystal3").click(function(){
        console.log(finalScore = finalScore + crystal3)
    })

    $(".crystal4").click(function(){
        console.log(finalScore = finalScore + crystal4)
    })

})












/*$(document).ready(function())
var tagetNumber = 94;
$("#target-number").text(tagetNumber);

var count = 0;

//Crystal Numbers
var numberChoices = [11, 9, 5, 1];

//for loop for crytals
for (var i = 0; i < numberChoices.length; i++);
*/
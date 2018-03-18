$( document ).ready(function() {

let wins = 0;
let losses = 0;

// populate wins, losses and trivia questions on DOM

$('.wins').text(wins);

function hideTrivia () {
    $('#question').hide();
    $('#a1').hide();
    $('#a2').hide();
    $('#a3').hide();
    $('#a4').hide();
    $('#timer').hide();
    $('#scores').hide();
    }
    hideTrivia();

var questions = [

{   question: 'Which of the seven dwarfs in "Snow White and the Seven Dwarves" did not have a beard?',
    ans1: 'Happy',
    ans2: "Dopey",
    ans3: "Grumpy",
    ans4: "Bashful",
    correctAns: "Dopey",
},

{
    question: 'What is the first message that Charlotte weaves in Charlottes web?',
    ans1: 'Good Pig',
    ans2: 'Think Pig',
    ans3: 'Hungry Pig',
    ans4: 'Some Pig',
    correctAns: 'Some Pig',
}
];

var temp = questions;

// timer function

var timer;
var timeLeft = 10;


function startTimer() {
  timer = setInterval(function() {  
    $("#timer").html('<h2>' + timeLeft + '</h2>');
    if (timeLeft === 0) {
        incorrect();
        // nextQues();
    } else {
        timeLeft--;
    }
  }, 1000);

}

// initial start of game

$('#start').click (function () {
    $('#start').hide();
    nextQues();
});

//function to show next question

function nextQues() {
        clearInterval(timer);
        timeLeft = 10;
        startTimer();
        $('#timer').show();
        $("#timer").html('<h2>' + timeLeft + '</h2>');
        $('#question').show();
        $('#question').empty();
        $('#question').append(temp[0].question);
        $('#a1').show();
        $('#a1').empty();
        $('#a1').append(temp[0].ans1);   
        $('#a2').show();
        $('#a2').empty();
        $('#a2').append(temp[0].ans2);
        $('#a3').show();
        $('#a3').empty();
        $('#a3').append(temp[0].ans3);
        $('#a4').show();
        $('#a4').empty();
        $('#a4').append(temp[0].ans4);
}


// function for correct Answer

function correct() {
    wins++;
    temp.shift();
    if (!Array.isArray(temp) || !temp.length) {
        alert('you got it!');
        alert('game over');
        clearInterval(timer);
        hideTrivia();
        $('#scores').show();
      } else {
        alert('you got it!')
        nextQues();
    }
}

//function for incorrect Answer

function incorrect() {
    losses++;
    temp.shift();
    if (!Array.isArray(temp) || !temp.length) {
        alert('sorry!');
        alert('game over');
        clearInterval(timer);
        hideTrivia();
        $('#scores').show();
      } else {
        alert('sorry!')
        nextQues();
    }

}

// click on button for correct answer
$('.btn-lg').click(function() {
    if ( $(this).text() === temp[0].correctAns) {
        correct();
    } else if ($(this).text() !== temp[0].correctAns){
        incorrect();
    }
    });

    console.log('btn click', temp[0].correctAns);
    



// Timer on the question for 30 secs

// If time runs out > show answer > counter losses++ > remove temp [0] from temp questions > show next question
// If answer is correct > good job! > counter wins++ > remove temp [0]
})
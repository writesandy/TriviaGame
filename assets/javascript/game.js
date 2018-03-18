$( document ).ready(function() {

$('#question').hide();
$('#a1').hide();
$('#a2').hide();
$('#a3').hide();
$('#a4').hide();
$('#showScores').hide();



// Variables

// store all the objects in the 
// create temp array with questions and then pop off the one that is displayed after user answers. 
// Then copy into  new temp array length

//is index = 0 for temp? show final results and restart Gamepad
//if time is 0 then display answer and then next question
//if user selected wrong answer display answer and next question
//if user answers correctly - good job! display next question

let wins = 0;
let losses = 0;


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

//var timer;

var timer;
var timeLeft = 10;


function startTimer() {
  timer = setInterval(function() {  
    $("#timer").html('<h2>' + timeLeft + '</h2>');
    if (timeLeft === 0) {
        alert('sorry - you are out of time');
        losses++;
      clearInterval(timer);
      nextQues();
    } else {
      timeLeft--;
    }
  }, 1000);

}




// initial start of game

$('#start').click (function () {
    $('#question').show();
    $('#question').append(temp[0].question);
    $('#a1').show();
    $('#a1').append(temp[0].ans1);   
    $('#a2').show();
    $('#a2').append(temp[0].ans2);
    $('#a3').show();
    $('#a3').append(temp[0].ans3);
    $('#a4').show();
    $('#a4').append(temp[0].ans4);
    $('#start').hide();
    clearInterval(timer);
    startTimer();

});

//function to show next question

function nextQues() {
    temp.shift();
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
    clearInterval(timer);
    timeLeft = 10;
    startTimer();
    $("#timer").html('<h2>' + timeLeft + '</h2>');
}





// function for correct Answer

function correct() {
    wins++;
    alert('Yass! You got it!')
}

//function for incorrect Answer

function incorrect() {
    losses++;
    alert('Ooops!')
}

// Outta Time

// If out of time - sorry you are out of time, show correctAnswer, next question

function noTime() {
    losses++;
    alert('you are out of time')

}

// click on button for correct answer

$('.btn-lg').click(function() {
    let temp = questions;
    if ( $(this).text() === temp[0].correctAns) {
        correct();
        nextQues();
    } else if ($(this).text() !== temp[0].correctAns){
            incorrect();
            nextQues();
    }
    });

    console.log('btn click', temp[0].correctAns);
    



// Timer on the question for 30 secs

// If time runs out > show answer > counter losses++ > remove temp [0] from temp questions > show next question
// If answer is correct > good job! > counter wins++ > remove temp [0]
})
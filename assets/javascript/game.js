$( document ).ready(function() {

$('#question').hide();
$('#a1').hide();
$('#a2').hide();
$('#a3').hide();
$('#a4').hide();



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
var started = false;

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
}

// timer function
var count =32;
var counter=setInterval(startTimer, 1000);

function startTimer () {
    count = count-1;
    if (count < 0)
    {
        clearInterval(counter);
        return;
        // $('#timer').show();
 
    }
        $('#timer').html('<h2>' + count + '</h2>');
}

// function for correct Answer

function correct() {
    wins++;
    alert('correct!')
}

//function for incorrect Answer

function incorrect() {
    losses++;
    alert('Ooops!')
}

// function showScores() {
//     if (temp === )
// }


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
    startTimer();
});

// click on button for correct answer

$('.btn-lg').click(function() {
    let temp = questions;
    if ( $(this).text() === temp[0].correctAns) {
        correct();
        nextQues();
    } else {
    ($(this).text() !== temp[0].correctAns);
        incorrect();
        nextQues();
    }
  
});

    console.log('btn click', temp[0].correctAns);
    



// Timer on the question for 30 secs

// If time runs out > show answer > counter losses++ > remove temp [0] from temp questions > show next question
// If answer is correct > good job! > counter wins++ > remove temp [0]
})
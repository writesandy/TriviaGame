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

var questions = [

{   question: 'Which of the seven dwarfs in "Snow White and the Seven Dwarves" did not have a beard?',
    ans1: 'Happy',
    ans2: "Dopey",
    ans3: "Grumpy",
    ans4: "Bashful",
    correctAns: "ans2",
},

{
    question: 'What is the first message that Charlotte weaves in Charlottes web?',
    ans1: 'Good Pig',
    ans2: 'Think Pig',
    ans3: 'Hungry Pig',
    ans4: 'Some Pig',
    correctAns: 'ans4',
}
];

var temp = questions;
i = temp[Math.floor(Math.random()*questions.length)];

console.log(temp[1].question);
console.log(temp[1].ans2);

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
});


// function to show next question

// console.log(temp);

// console.log(questions[0].question);
// console.log(questions[0].ans1)



// Processes


});
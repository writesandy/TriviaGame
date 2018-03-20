$( document ).ready(function() {
var timer;
var timeLeft = 10;
let wins = 0;
let losses = 0;

// populate wins, losses and trivia questions on DOM



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

{   question: 'In the Peanuts cartoon and comics, what color is Woodstock??',
    ans1: 'Blue',
    ans2: "Green",
    ans3: "Yellow",
    ans4: "Orange",
    correctAns: "Yellow",
},

{
    question: 'Which of the following is a color scheme that involves the use of only one hue?',
    ans1: 'Complementary',
    ans2: 'Analogous',
    ans3: 'Chromomentary',
    ans4: 'Monochromatic',
    correctAns: 'Monochromatic',
},

{
    question: 'What movie in 1986, had 11 Oscar nominations and won none?',
    ans1: 'Back to the Future',
    ans2: 'Out of Africa',
    ans3: 'Prizzi+'+'s'+'Honor',
    ans4: 'The Color Purple',
    correctAns: 'The Color Purple',
},

{
    question: 'Geri Halliwell'+'s hair was what color while she was a spice girl??',
    ans1: 'Brown',
    ans2: 'Red',
    ans3: 'Bleach Blond',
    ans4: 'Green',
    correctAns: 'Red',
},

{
    question: 'Which of the following colors are classified as primary colors?',
    ans1: 'Red, yellow, and blue',
    ans2: 'Orange, green, and violet',
    ans3: 'White, Black, Rainbow',
    ans4: 'None of These',
    correctAns: 'Red, yellow, and blue',
},

{
    question: 'The Nazi SS troops wore what color shirts??',
    ans1: 'White',
    ans2: 'Black and White',
    ans3: 'Black',
    ans4: 'Black White and Red',
    correctAns: 'Black',
},

{
    question: 'From what element does turquoise derive its distinctive color??',
    ans1: "Copper",
    ans2: 'Manganese',
    ans3: 'Vitamin B12',
    ans4: 'Radiation',
    correctAns: 'Copper',
},

{
    question: 'Who had a 1980s hit with True Colors?',
    ans1: 'Alanis Morisette',
    ans2: 'Madonna',
    ans3: 'Cindy Lauper',
    ans4: 'Olivia Newton-John',
    correctAns: 'Cindy Lauper',
},

{
    question: 'Before he had it painted pink in 1955, what color was Elvis Presley+'+'s first Cadillac??',
    ans1: 'Blue',
    ans2: 'Black',
    ans3: 'Myth - it was always pink',
    ans4: 'White',
    correctAns: 'Blue',
},

{
    question: 'What part of the eye gives it color?',
    ans1: 'Cornea',
    ans2: 'Iris',
    ans3: 'Lens',
    ans4: 'Retina',
    correctAns: 'Iris',
},

];

var temp = questions;

// timer function


function startTimer() {
  timer = setInterval(function() {  
    $("#timer").text(`${timeLeft} seconds`);
    if (timeLeft === 0) {
        incorrect();
    } else {
        timeLeft--;
    }
  }, 1000);

}

function showScores() {
    $('#scores').show();
    $('.wins').text(wins);
    $('.losses').text(losses);
}


// initial start of game

$('#start').click (function () {
    $('#start').hide();
    nextQues();
});

$('#tryAgain').click (function () {
    $('#tryAgain').hide();
    temp.unshift(9,8,7,6,5,4,3,2,1,0);
    $('#question').show();
    $('#a1').show();
    $('#a2').show();
    $('#a3').show();
    $('#a4').show();
    $('#timer').show();
    $('#scores').hide();
    nextQues();
});

//function to show next question

function nextQues() {
        $('#scores').hide();
        clearInterval(timer);
        timeLeft = 10;
        startTimer();
        $('#timer').show();
//        $("#timer").html('<h2>' + timeLeft + '</h2>');
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
        clearInterval(timer);
        hideTrivia();
        $('#scores').show();
        $('.wins').text(wins);
        $('.losses').text(losses);

      } else {
        clearInterval(timer);

        hideTrivia();
        $('#scores')
        $('.wins').text(wins);
        $('.losses').text(losses);
        nextQues();


    }
}

//function for incorrect Answer

function incorrect() {
    losses++;
    temp.shift();
    if (!Array.isArray(temp) || !temp.length) {
        clearInterval(timer);
        hideTrivia();
        showScores();
      } else {
        clearInterval(timer);
        showScores();
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
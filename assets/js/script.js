// Create a landing page with a large title, description, and a start quiz button.
const startButton = document.getElementById('start-btn')
var currentQuestionIndex = 0;
var questions = [
    
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'strings', correct: false },
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false},

        ]
    },
    {
        question: 'Q2',
        answers: [
            {text: 'a1', correct: false },
            {text: 'a2', correct: false},
            {text: 'a3', correct: true},
            {text: 'a4', correct: false},

        ]
    },
    {
        question: 'Q3',
        answers: [
            {text: 'a1', correct: false },
            {text: 'a2', correct: false},
            {text: 'a3', correct: true},
            {text: 'a4', correct: false},

        ]
    },
    {
        question: 'Q4',
        answers: [
            {text: 'a1', correct: false },
            {text: 'a2', correct: false},
            {text: 'a3', correct: true},
            {text: 'a4', correct: false},

        ]
    }
]

startButton.addEventListener('click', startGame)



//Hides landing page and starts the game
function startGame() {
    console.log('Game Started!')
    document.getElementById('start-page').style.display = "none";
    document.getElementById('Questions').style.display = "initial";
    
    setNextQuestion()



}
//Displays next question on screen
 function setNextQuestion() {
    const question = $('.question');
    question.text(questions[currentQuestionIndex].question);
    
    for (var i = 0 ; i < questions[currentQuestionIndex].answers.length; i++) {
        var ansbtn = $('<button>');
        ansbtn.addClass('ansbtn');
        ansbtn.attr('data-true');
        ansbtn.text(questions[currentQuestionIndex].answers[i].text);
        $('.answers').append(ansbtn);
    //    $('.answers').append('<button class="ansbtn" >'+questions[currentQuestionIndex].answers[i].text+'</button>'); 
    } 
 
    $(".ansbtn").on('click', function(event) {
    
        console.log('question answered');
        console.log(event.target);
        $('.answers').empty();
        currentQuestionIndex =  currentQuestionIndex + 1;
        if(currentQuestionIndex < 4) { 
            setNextQuestion();
        }
        else {
            document.getElementById('Questions').style.display = "none";
            document.getElementById('last-page').style.display = "initial";
        };
        
            });
}
//On click of answer needs to create a function to 
//check answer for correct and change question index by 1
ansbtn.on('click', function() {
    console.log('next')
});



 


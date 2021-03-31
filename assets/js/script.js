// Create a landing page with a large title, description, and a start quiz button.
const startButton = document.getElementById('start-btn');
var scoresbtn = $('.scoresbtn');
var currentQuestionIndex = 0;
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var score = 0;
var highScore = document.getElementById('high-scores');
var highScores = JSON.parse(localStorage.getItem("high-scores")) || []
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
        question: 'The condition in an if/ else statement is enclosed within _____. ',
        answers: [
            {text: 'Parentheses', correct: true },
            {text: 'Curly Brackets', correct: false},
            {text: 'Quotes', correct: false},
            {text: 'Square Brackets', correct: false},

        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store_____.',
        answers: [
            {text: 'Numbers and strings', correct: false },
            {text: 'Other arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'all of the above', correct: true},

        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content  to the debugger is;',
        answers: [
            {text: 'JavaScript', correct: false },
            {text: 'Console Log', correct: true},
            {text: 'For Loops', correct: false},
            {text: 'Terminal/Bash', correct: false},

        ]
    }
]

// functionality for back button in ending page and high score page
$('#back-btn').on("click", function(){
    console.log('backinitiated')
    document.getElementById('last-page').style.display = "none";
    document.getElementById('start-page').style.display = "initial";
    document.getElementById('score-page').style.display = "none";
});

$('#go-back').on("click", function(){
    console.log('backinitiated')
    document.getElementById('last-page').style.display = "none";
    document.getElementById('start-page').style.display = "initial";
    document.getElementById('score-page').style.display = "none";
});

// Sets up start button to start game
startButton.addEventListener('click', startGame)

//Hides landing page and starts the game
function startGame() {
    $('.answers').empty();
    currentQuestionIndex = 0;
    score = 0;
    gameClock()
    console.log('Game Started!')
    document.getElementById('start-page').style.display = "none";
    document.getElementById('Questions').style.display = "initial";
    setQuestion()
}

//Displays next question on screen
 function setQuestion() {
    const question = $('.question');
    question.text(questions[currentQuestionIndex].question);
    
    for (var i = 0 ; i < questions[currentQuestionIndex].answers.length; i++) {
        var ansbtn = $('<button>');
        ansbtn.addClass('ansbtn');
        ansbtn.attr('data-true');
        ansbtn.attr('data-index', i);
        ansbtn.text(questions[currentQuestionIndex].answers[i].text);
        $('.answers').append(ansbtn);
    } 
//Compares if answer is correct or not and adds/removes time
    $(".ansbtn").on('click', function(event) {
        var clickedIndex = event.target.attributes[1].value
        console.log(questions[currentQuestionIndex].answers[2])
        var correct = questions[currentQuestionIndex].answers[clickedIndex].correct 
        if(correct) {
            console.log('wooooooooo')
            score = score + 10;
        }
        else {
            score = score -10;
            timeLeft = timeLeft -10;
            console.log('f')
        }
        
        console.log('question answered');
        console.log(event.target.innerText);
        $('.answers').empty();
        currentQuestionIndex =  currentQuestionIndex + 1;
        if(currentQuestionIndex < 4) { 
            setQuestion();
        }
        else {
            timeLeft = 0;
            document.getElementById('Questions').style.display = "none";
            document.getElementById('last-page').style.display = "initial";
        };
        
            });
}
//Sets up functionality for High Score button
scoresbtn.on('click', function() {
    document.getElementById('start-page').style.display = "none";
    document.getElementById('last-page').style.display = "none";
    document.getElementById('Questions').style.display = "none";
    document.getElementById('score-page').style.display = "initial";


    console.log('Highs-scores pressed')
});

//pulling stored info from local storage to create high scores page
function saveScore(){
    var userName = prompt("Great job! Enter your name below:", "Your Name Here")
    var userScore = score;
    var finalScore = {userName, userScore};
    highScores.push(finalScore);
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    popScores();
};
function popScores(){
    highScores.sort(function (a,b){
        return b.userScore - a.userScore;
    })
    highScore.innerHTML = "";
    highScores.forEach(function(person){
        var listEl = document.createElement("li")
        listEl.textContent = "Player: " + person.userName + "| Score: " + person.userScore;
        highScore.appendChild(listEl);
    })
}


//Timer function and displays score/timer on page. 
function gameClock(){
    timeLeft = 30
    var timeInterval = setInterval(function(){
        if(timeLeft > 0){
            timerEl.textContent = "Time Left: " + timeLeft;
            scoreEl.textContent = "Score: " + score
            timeLeft--;
        }else{   
            timerEl.textContent = "Game over";
            clearInterval(timeInterval);
            document.getElementById('Questions').style.display = "none";
            document.getElementById('last-page').style.display = "initial";
            saveScore();
        };
    }, 1000);
};
 

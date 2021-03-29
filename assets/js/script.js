// Create a landing page with a large title, description, and a start quiz button.
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Game Started!')
    document.getElementById('start-page').style.display = "none";
    document.getElementById('Questions').style.display = "initial";



}

// function setNextQuestion {


// }

// function selectAnswer() {

// }

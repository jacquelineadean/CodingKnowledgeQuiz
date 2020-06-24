var timerEl = document.querySelector("#timer");

var quizStart = document.querySelector("#quiz");
var highScoreSave = document.querySelector("#highScores");

const startButtonEl = document.getElementById("startButton");
const questContainerEl = document.getElementById("questContainer");
const questionEl = document.getElementById("question");
const answerBtnsEl = document.getElementById("answerBtns");

let shuffledQuestions, currentTitleIndex


var score = 0;
var timeLeft = 100;
var highscores = [];

startButtonEl.addEventListener("click", startQuiz);
questContainerEl.addEventListener("click", checkAnswer);


function startQuiz() {
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questContainerEl.classList.remove("hide");
    //start time function
    startTimer();
    //set text content of time on DOM

    // call getQuestion function
    getQuestion();
};

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
};

startButton.onclick = function() {
    var sixtySeconds = 60
        display = document.querySelector("#timer");
    startTimer(sixtySeconds, display);
};

function getQuestion() {
    resetState()
    showQuestion(currentQuestionIndex);  
};

function showQuestion(questionEl) {
    document.getElementById("question").innerHTML = questions[questionEl].title;
    console.log(questionEl);
    questions[questionEl].choices.forEach((answer, i) => {
        const button = document.createElement("button")
        button.innerText = questions[questionEl].choices[i]
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.choices = questions[questionEl].choices[i].answer
        }
        button.addEventListener("click", checkAnswer)
        document.getElementById("answerButtons").appendChild(button)
    })
    
};

function resetState() {
    // nextButton.classList.add("hide");
    while (document.getElementById("answerButtons").firstChild) {
        document.getElementById("answerButtons").removeChild
        (document.getElementById("answerButtons").firstChild)
    }
}

function checkAnswer() {
    const selectedButton = e.target
    const answer = selectedButton.dataset.answer
    setStatusClass(document.body, answer)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.answer)
    })

};

function setStatusClass(element, answer){
    clearStatusClass(element)
    if (answer) {
        showQuestion();
    } else {
        text = "Wrong"
        timer.setSeconds(timer.getSeconds() - 10);
    }
}
    
const questions = [
    {
        title: "Which of the following is not one of the three primary languages of web development?",
        choices: ["HTML","CSS","Java","JavaScript"],
        answer: "Java"
    },
    {
        title: "Which of the following is not a property of the Box Model?",
        choices: ["Margin","Border","ID Selector","Padding"],
        answer: "ID Selector"
    },
    {
        title: "Bootstrap is to CSS as _____ is to JavaScript.",
        choices: ["HTML","jQuery","Java","Github"],
        answer: "jQuery"
    },
    {
        title: "A very userful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","for loops","console.log"],
        answer: "console.log"
    },
]


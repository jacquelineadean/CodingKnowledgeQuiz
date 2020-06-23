// HTML Elements
var startButton = document.querySelector("#start");

function startQuiz() {
    //start time function
    
    //set text content of time on DOM

    // call getQuestion function
    getQuestion();
}

function getQuestion() {
    // get the question/answer object from your questions array based on the current question index
    
    // update the DOM with the current question
    // clear out any old question choices
    // update the DOM with the current answer choices
        // for loop that goes through the answer choices
            // creates a button 
            // set a class attribute of "choice"
            // set a value attribute of choice
            // set text content of button to be choice
            // append button to the DOM
}

goBackButton.addEventListener("click", startGame);
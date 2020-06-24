const scoresSavedEl = document.querySelector("#scoresSaved");

var userInitials;
var highScores;

function saveHighScores() {
    var userInitials = localStorage.getItem("userInitials");
    var highScores = localStorage.getItem("highScores");

    if (!userInitials || highScores){
        return;
    }
    userInitialsSpan.textContent = email;
    userHighScoresSpan.textContent = highScores;
}



saveScoreButton.addEventListener("click", function(event){
    event.preventDefault();

    var userInitials = document.querySelector("#userInitials").value;
    var highScores = document.querySelector("#highScores").value;

    if (userInitials === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success","Saved successfully");
    
        localStorage.setItem("Initials", userInitials);
        localStorage.setItem("highScores", highScores);
        saveHighScores();
    }
});




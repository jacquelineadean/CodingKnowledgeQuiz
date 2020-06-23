var seconds = document.getElementById("timeRemaining").textContent;
var countdown = setInterval(function(){
    seconds--;
    document.getElementById("timeRemaining").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 100);





// // var count = 100;
// var timeRemainingEl = document.querySelector("#timeRemaining");


// var x = setInterval(function(){
//     var count = 100;
    
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.querySelector("#timeRemaining").innerHTML = seconds;

// })


// function wrongAnswerPenalty() {
//     if  
// }

// timeRemainingEl.addEventListener("click", function(){

// });
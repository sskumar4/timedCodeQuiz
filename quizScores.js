//establish a variable to access HTML
const hiScoresList = document.getElementById("hi-scores");
//from localStorage JSON object, retrieve the stringified highScores list 
const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
const clr_hi = document.getElementById("clear_hi");

//Populate the high score list
hiScoresList.innerHTML = hiScores.map(score => {
        return `<li class="quiz-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
//click event listener to clear local storage
clr_hi.addEventListener("click", e => {
    window.localStorage.clear();

});


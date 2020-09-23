//DOM Variables
const intials = document.getElementById("initials");
const saveBtn = document.getElementById("saveBtn");
const yourScoreVar = document.getElementById("your_score");
const  yourScoreVal= localStorage.getItem("yourScore");
const completionText = localStorage.getItem("completionText");
const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];

//check to see if the clock ran out
yourScoreVar.innerText = completionText;

//retrieve score from localstorage and display
yourScoreVar.innerText += "Your final time score is: " + yourScoreVal;

intials.addEventListener("keyup", () => {
    saveBtn.disabled = !intials.value;
});

//Process user intials and store
saveScore = e => {
    e.preventDefault();
    const score = {
        score: yourScoreVal,
        name: intials.value
    };
    //save the latest user and score in local storage
    hiScores.push(score);
    //sort the entries in localStorage
    hiScores.sort((a, b) => b.score - a.score);
    //save top 5 socres 
    hiScores.splice(5);

    localStorage.setItem("hiScores", JSON.stringify(hiScores));
    window.location.replace("quizScores.html");

};
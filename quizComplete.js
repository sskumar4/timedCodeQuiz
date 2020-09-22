//Initializing constants that query the DOM 
const intials = document.getElementById("initials");
const saveBtn = document.getElementById("saveBtn");
const yourScoreVar = document.getElementById("your_score");
const  yourScoreVal= localStorage.getItem("yourScore");
const endText = localStorage.getItem("endText");
const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
const MAX_HIGH_SCORES = 5;

// The following code tells the user if the clock ran out or finished in time and scored more than zero. This is first set in game.js localStorage. It is retrieved from localStorage to show the user.

yourScoreVar.innerText = endText;

//The user's score is retrieved from localstorage and presented
yourScoreVar.innerText += "Your final time score is: " + yourScoreVal;


//instruct user to enter Initials
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
    //push the latest user and score in local storage
    hiScores.push(score);
    //sort the entries in localStorage
    hiScores.sort((a, b) => b.score - a.score);
    //retain only top 5 socres 
    hiScores.splice(5);
    //store in localStorage
    localStorage.setItem("hiScores", JSON.stringify(hiScores));
    //Load the hiscores.html 
    window.location.replace("quizScores.html");

};
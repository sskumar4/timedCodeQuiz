//Variables that point to HTML elements in codeQuiz.html
const questionTxt = document.getElementById("question-txt");
const ansOptionsTxt = Array.from(document.getElementsByClassName("answer-options-txt"));
const timerTxt = document.getElementById("timer-txt");

const resultDiv = document.getElementById("result-container");


const quizlet = [{
  question: "In Javascript, how do you prompt users with messages and at the same time requesting user inputs?",
  answer1: "1. Alert()",
  answer2: "2. Display()",
  answer3: "3. Prompt()",
  answer4: "4. Confirm()",
  correctAnswer: 3
},

{
  question: "How do you find the minimum of x and y using JavaScript?",
  answer1: "1. min(x,y);",
  answer2: "2. Math.min(x,y)",
  answer3: "3. Math.min(xy)",
  answer4: "4. min(xy); ",
  correctAnswer: 2
},

{
  question: "Which are the correct \"if\" statements to execute certain code if “x” is equal to 2?",
  answer1: "1. if(x 2)",
  answer2: "2. if(x = 2)",
  answer3: "3. if(x == 2)",
  answer4: "4. if(x != 2 )",
  correctAnswer: 3
},

{
  question: "Which of the following function of Array object reverses the order of the elements of an array?",
  answer1: "1. reverse()",
  answer2: "2. push()",
  answer3: "3. reduceRight()",
  answer4: "4. reduce()",
  correctAnswer: 1
},

{
  question: "What statement supplies the value of a function?",
  answer1: "1. continue",
  answer2: "2. return",
  answer3: "3. cancel",
  answer4: "4. valueOf",
  correctAnswer: 2
},

{
  question: "How do you find the number with the highest value of x and y?",
  answer1: "1. Math.max(x, y)",
  answer2: "2. top(x, y)",
  answer3: "3. ceil(x, y)",
  answer4: "4. Math.ceil(x, y)",
  correctAnswer: 1
},

{
  question: "How do you create a function in JavaScript?",
  answer1: "1. function = myFunction()",
  answer2: "2. function:myFunction()",
  answer3: "3. function myFunction()",
  answer4: "4. function - myFunction()",
  correctAnswer: 3
}
];
let timerId;
// max quiz time of 90 seconds allowed
let remainingQuizTime = 80;
let ongoingQuestion = {};
let readyForUserInput = false;

function quizTimer() {
  timerId = setInterval(function() {
      remainingQuizTime--;
      timerTxt.innerHTML = 'Time: ' + '00:' + remainingQuizTime;
      if (remainingQuizTime < 0)
          remainingQuizTime = 0;
      if (remainingQuizTime === 0) {
          localStorage.setItem("yourScore", remainingQuizTime);
          localStorage.setItem("Text", "Time Up.");
          return window.location.assign("quizComplete.html");
      }

  }, 1000);
}


//Constant that holds the maximum number of questions
const MAX_QUESTIONS = 7;
//function to start the game game.js loads
startGame = () => {
    questionCounter = 0;
    score = 0;
    unpresentedQuizlet = [...quizlet];
    presentNextQuestion();
    document.getElementById('timer-txt').innerHTML = 'Time: ' + '00:' + remainingQuizTime;
};


//function to get new question and save the score in localstorage
function presentNextQuestion() {

    if (unpresentedQuizlet.length === 0 || questionCounter >= MAX_QUESTIONS || remainingQuizTime < 1) {
        if (remainingQuizTime < 0)
            remainingQuizTime = 0;
        localStorage.setItem("yourScore", remainingQuizTime);
        localStorage.setItem("endText", "");
        //go to the end page
        return window.location.replace("quizComplete.html");

    }

    questionCounter++;
    const randomIndex = Math.floor(Math.random() * unpresentedQuizlet.length);
    ongoingQuestion =unpresentedQuizlet[randomIndex];
    questionTxt.innerHTML = ongoingQuestion.question;

    let ansOptionsLength = ansOptionsTxt.length;
    let ansChoice =0;
    do {
      let ansOptNum =ansOptionsTxt[ansChoice].dataset["number"];
      
      ansOptionsTxt[ansChoice].innerHTML = ongoingQuestion["answer" + ansOptNum];
      ansChoice++;
    } while (ansChoice < ansOptionsLength);



    unpresentedQuizlet.splice(randomIndex, 1);
    readyForUserInput = true;
};

startGame();
quizTimer();
//Add EventListeners and process user's answer

let ansOption =0;
do {
  ansOptionsTxt[ansOption].addEventListener("click", e => {
      if (!readyForUserInput) return;
      readyForUserInput = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
 
      const rightOrWrong =
          selectedAnswer == ongoingQuestion.correctAnswer ? "Right" : "Wrong";
      (rightOrWrong === "Right") ? remainingQuizTime +=5 : remainingQuizTime -=10;

      //Add 'Right!' or 'Wrong' text and horizontal line to be presented for 1 sec

      selectedChoice.parentElement.classList.add(rightOrWrong);
      resultStr = rightOrWrong + "!";
      resultStr = resultStr.fontsize("3");
      resultStr = resultStr.bold();
      resultStr = (rightOrWrong === "Right") ? resultStr.fontcolor("green"):resultStr.fontcolor("red");

      resultDiv.innerHTML = `${`<br/><hr /><br/>` + resultStr }`;
//A new question is selected by calling presentNextQuestion              
setTimeout(() => {

selectedChoice.parentElement.classList.remove(rightOrWrong);
resultDiv.innerHTML = "";
presentNextQuestion();

}, 1000);

    });
    ansOption++;
  } while (ansOption < ansOptionsTxt.length);

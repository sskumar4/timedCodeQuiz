const listOfQuestions = [{
  question: "In Javascript, how do you prompt users with messages and at the same time requesting user inputs?",
  choice1: "Alert()",
  choice2: "Display()",
  choice3: "Prompt()",
  choice4: "Confirm()",
  answer: 3
},

{
  question: "How do you find the minimum of x and y using JavaScript?",
  choice1: "min(x,y);",
  choice2: "Math.min(x,y)",
  choice3: "Math.min(xy)",
  choice4: "min(xy); ",
  answer: 2
},

{
  question: "Which are the correct \"if\" statements to execute certain code if “x” is equal to 2?",
  choice1: "if(x 2)",
  choice2: "if(x = 2)",
  choice3: "if(x == 2)",
  choice4: "if(x != 2 )",
  answer: 3
},

{
  question: "Which of the following function of Array object reverses the order of the elements of an array?",
  choice1: "reverse()",
  choice2: "push()",
  choice3: "reduceRight()",
  choice4: " reduce()",
  answer: 1
},

{
  question: "What statement supplies the value of a function?",
  choice1: "continue",
  choice2: "return",
  choice3: "cancel",
  choice4: "valueOf",
  answer: 2
},

{
  question: "How do you find the number with the highest value of x and y?",
  choice1: "Math.max(x, y)",
  choice2: "top(x, y)",
  choice3: "ceil(x, y)",
  choice4: "Math.ceil(x, y)",
  answer: 1
},

{
  question: "How do you create a function in JavaScript?",
  choice1: "function = myFunction()",
  choice2: "function:myFunction()",
  choice3: "function myFunction()",
  choice4: "function - myFunction()",
  answer: 3
}
];
let timerId;
// max quiz time of 90 seconds allowed
let remainingQuizTime = 90;

function quizTimer() {
  timerId = setInterval(function() {
      remainingQuizTime--;
      document.getElementById('timer').innerHTML = 'Time: ' + '00:' + remainingQuizTime;
      if (remainingQuizTime < 0)
          remainingQuizTime = 0;
      if (remainingQuizTime === 0) {
          localStorage.setItem("recent-Score", remainingQuizTime);
          localStorage.setItem("Text", "Time Up.");
          return window.location.assign("quiz_complete.html");
      }

  }, 1000);
}

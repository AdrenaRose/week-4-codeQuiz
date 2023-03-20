document.querySelector("h1").setAttribute("style", "text-align:center");
document.querySelector("h1").style.marginBottom = "15px";
document.querySelector("h1").style.marginTop = "15px";

var questionOne = "All of the following are JavaScript data types EXCEPT:";
var questionOneA = "Number";
var questionOneB = "String";
var questionOneC = "Key Value";
var questionOneD = "Boolean";

var questionTwo = "What variable type should be used to store someone's age?";
var questionTwoA = "Number";
var questionTwoB = "Integer";
var questionTwoC = "String";
var questionTwoD = "Boolean";

var questionThree =
  "What property would you use to determine if a variable is a string, boolean, or object?";
var questionThreeA = "kindOf";
var questionThreeB = "variableType";
var questionThreeC = "variableName";
var questionThreeD = "typeOf";

var questionFour =
  "A sequence of steps that must be taken to perform a task is called a(n):";
var questionFourA = "Algorithm";
var questionFourB = "Function";
var questionFourC = "Process";
var questionFourD = "Formula";

var questionFive =
  "A boolean is a variable type that can only hold a value of either true or false.";
var questionFiveA = "True";
var questionFiveB = "False";

document.getElementById("questionArea").style.display = "none";

document.querySelector("button").addEventListener("click", takeQuiz);

function takeQuiz() {
  document.getElementById("p").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("questionArea").style.display = "block";
  promptQuestionOne();
  document
    .getElementById("Choice-C")
    .addEventListener("click", promptQuestionTwo);
}
// if (promptQuestionTwo) {
//   promptQuestionTwo();
// } else {
//   alert("That is incorrect");
// }

// promptQuestion(
//   questionThree,
//   questionThreeA,
//   questionThreeB,
//   questionThreeC,
//   questionThreeD,
//   questionThreeD
// );

// promptQuestion(
//   questionFour,
//   questionFourA,
//   questionFourB,
//   questionFourC,
//   questionFourD,
//   questionFourA
// );

// promptTrueFalse(questionFive, questionFiveA, questionFiveB, questionFiveA);

function promptQuestionOne() {
  document.getElementById("Question").append(questionOne);
  document.getElementById("Choice-A").append(questionOneA);
  document.getElementById("Choice-B").append(questionOneB);
  document.getElementById("Choice-C").append(questionOneC);
  document.getElementById("Choice-D").append(questionOneD);
}

function promptQuestionTwo() {
  document.getElementById("Question").textContent = questionTwo;
  document.getElementById("Choice-A").textContent = questionTwoA;
  document.getElementById("Choice-B").textContent = questionTwoB;
  document.getElementById("Choice-C").textContent = questionTwoC;
  document.getElementById("Choice-D").textContent = questionTwoD;
}

function promptTrueFalse(question, a, b, correctAnswer) {
  document.getElementById("Question").append(question);
  document.getElementById("Choice-A").append(a);
  document.getElementById("Choice-B").append(b);
}

// function cleanSlate() {
//   var textRemove = document.getElementsByClassName("list-group-item");
//   textRemove.remove();
// }

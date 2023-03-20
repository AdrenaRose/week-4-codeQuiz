document.querySelector("h1").setAttribute("style", "text-align:center");
document.querySelector("h1").style.marginBottom = "15px";
document.querySelector("h1").style.marginTop = "15px";

var questionOne = "All of the following are JavaScript data types EXCEPT:";
var questionOneA = "Number";
var questionOneB = "String";
var questionOneC = "Key Value";
var questionOneD = "Boolean";

var questionTwo = "";
var questionOneA = "Number";
var questionOneB = "String";
var questionOneC = "Key Value";
var questionOneD = "Boolean";

promptQuestion(
  questionOne,
  questionOneA,
  questionOneB,
  questionOneC,
  questionOneD,
  questionOneC
);

promptQuestion(
  questionTwo,
  questionTwoA,
  questionTwoB,
  questionTwoC,
  questionTwoD,
  questionTwoA
);

promptQuestion(
  question ,
  question ,
  question ,
  question ,
  question ,
  question 
)

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

promptQuestion(question, question, question, question, question, question);

function promptQuestion(question, a, b, c, d, correctAnswer) {
  document.getElementById("Question").append(question);
  document.getElementById("Choice-A").append(a);
  document.getElementById("Choice-B").append(b);
  document.getElementById("Choice-C").append(c);
  document.getElementById("Choice-D").append(d);
}
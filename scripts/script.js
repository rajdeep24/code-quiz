//////////////////////////////////////////////////////////
////////////////////Global Variables & Objects ///////////
//////////////////////////////////////////////////////////

//List all the possible global variables from each page

/////////////////////////////////
/////////Page-1-Start-Quiz///////
/////////////////////////////////
//---------h1-------//
var h1CodingQuizChallenge = document.createElement("h1"); //1 Create your h1 heading
h1CodingQuizChallenge.innerHTML = "Coding Quiz Challenge"; //2 Insert text into your h1
document.body.children[1].prepend(h1CodingQuizChallenge); //3.) Prepend html h1 heading

//---------P-------//
var directionsParaEl = document.createElement("p"); //1.) Create <p> tag
directionsParaEl.innerHTML =
	"Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!"; //2.) Insert quiz-directions into the p tag
document.body.children[1].append(directionsParaEl); //3.) Append <p> tag

//---------Start Button-------//
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start Quiz";
document.body.children[1].append(startBtn);

//---------Timer-------------//
timerEl = document.querySelector("#timer");
timerEl.innerHTML = console.log(timerEl);

/////////////////////////////////
/////Page-2-5-Questionnaire//////
/////////////////////////////////

var questionEl = document.querySelector("question");
var btn1EL = document.querySelector("#btn-1");
var btn2EL = document.querySelector("#btn-2");
var btn3EL = document.querySelector("#btn-3");
var btn4EL = document.querySelector("#btn-4");

questionsAndAnswers = [
	{
		question1: "Question 1 here",
		choice1: "Choice1",
		choice2: "Choice2",
		choice3: "Choice3",
		choice4: "Choice4",
		answerKey: "Identify the choice number",
	},
	{
		question2: "Question 2 here",
		choice1: "Choice1",
		choice2: "Choice2",
		choice3: "Choice3",
		choice4: "Choice4",
		answerKey: "Identify the choice number",
	},
	{
		question3: "Question 3 here",
		choice1: "Choice1",
		choice2: "Choice2",
		choice3: "Choice3",
		choice4: "Choice4",
		answerKey: "Identify the choice number",
	},
	{
		question4: "Question 4 here",
		choice1: "Choice1",
		choice2: "Choice2",
		choice3: "Choice3",
		choice4: "Choice4",
		answerKey: "Identify the choice number",
	},
];

////////////////////////////////////////
///////Page-6-Enter & Submit Score//////
////////////////////////////////////////

////////////////////////////////////////
///////Page-7-Display HighScore/////////
////////////////////////////////////////

// GIVEN I am taking a code quiz
// WHEN I click the start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
	console.log("the quiz has started.");
	startButton.classList.add("hide");
}

// THEN a timer starts and I am presented with a question
function setTimer() {}

function setNextQuestion() {}

// WHEN I answer a question
function selectAnswer() {}

//Function will below will either display if you got a question "Correct!" or "Wrong!"
function displaySelectionResult() {}
// THEN I am presented with another question
function setNextQuestion() {}
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

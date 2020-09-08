var startButton = document.getElementById("start-btn");

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

// Global Variables

//List out the distinct screen layouts in order and identify the element(s) that will be used in each row
//Layout_1: Coding Quiz Challenge
//-----nav:<nav-brand></nav-brand> & <timer></timer>
//-----row-1:<h1></h1>
//-----row-2:<p1></p1>
//-----row-3:<button class="btn btn-start-quiz">Start Quiz</button>

//Layout_2: Questionnaire-page (5)
//-----nav:<nav-brand></nav-brand> & <timer></timer>
//-----row-1:
//---------col-sm-12
//---------------<h2>Questions Go Here</h2>
//-----row-2:
//---------col-sm-6
//--------------row-1-q-1
//--------------row-1-q-1
//--------------row-1-q-1
//--------------row-1-q-1
//----------------<ol>
//-------------------<li><button class="btn btn-answer-options"></button></li>
//-------------------<li><button class="btn btn-answer-options"></button></li>
//-------------------<li><button class="btn btn-answer-options"></button></li>
//-------------------<li><button class="btn btn-answer-options"></button></li>
//---------------<ol>
//---------col-sm-6
//-----row-3:
//---------col-sm-12
//---------------<p>Wrong! or Correct!<p>

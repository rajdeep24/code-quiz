var startButton = document.querySelector("#start-btn");

//---------Timer-------------//
var timerEl = document.querySelector("#timer");
var timerId;
var totalTime = 70; // Total seconds given to take the quiz
var questionIndex = 0;
var score = 0;

function startTimer() {
	timerId = setInterval(function () {
		totalTime--;
		//update timer

		// when time reaches 0 the game is over;
		if (totalTime === 0) {
			endgame();
		}

		timerEl.innerHTML = totalTime;
	}, 1000); // One Second Interval
}
/////////////////////////////////
/////Page-2-5-Questionnaire//////
/////////////////////////////////

var questionEl = document.querySelector("#question");
var btn1EL = document.querySelector("#btn-1");
var btn2EL = document.querySelector("#btn-2");
var btn3EL = document.querySelector("#btn-3");
var btn4EL = document.querySelector("#btn-4");

questionsAndAnswers = [
	{
		question: "1.Commonly used data types DO NOT include: ",
		options: ["1strings", "booleans", "alerts", "numbers"],
		answerKey: 2,
	},
	{
		question: "2.Commonly used data types DO NOT include: ",
		options: ["2strings", "booleans", "alerts", "numbers"],
		answerKey: 2,
	},
	{
		question: "3.Commonly used data types DO NOT include: ",
		options: ["3strings", "booleans", "alerts", "numbers"],
		answerKey: 2,
	},
	{
		question: "4.Commonly used data types DO NOT include: ",
		options: ["4strings", "booleans", "alerts", "numbers"],
		answerKey: 2,
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
	// render question 1
	//startTimer
	startTimer();
	renderQuestion();
}

function renderQuestion() {
	questionEl.innerHTML = questionsAndAnswers[questionIndex].question;
	btn1EL.innerHTML = questionsAndAnswers[questionIndex].options[0];
	btn2EL.innerHTML = questionsAndAnswers[questionIndex].options[1];
	btn3EL.innerHTML = questionsAndAnswers[questionIndex].options[2];
	btn4EL.innerHTML = questionsAndAnswers[questionIndex].options[3];
}

var answerSelectors = document.querySelectorAll(".answer");

for (var i = 0; i < answerSelectors.length; i++) {
	answerSelectors[i].addEventListener("click", answerQuestion);
}

function answerQuestion(event) {
	var answer = parseInt(event.target.getAttribute("answer-key"));

	if (answer === questionsAndAnswers[questionIndex].answerKey) {
		alert("correct");
		score++;
	} else {
		alert("incorrect");
	}

	questionIndex++;

	// WHEN all questions are answered the game is over
	if (questionIndex > questionsAndAnswers.length - 1) {
		endgame();
	} else {
		renderQuestion();
	}
}

function endgame() {
	clearInterval(timerId);
	alert("end game");
	// use a prompt to ask the user for their name
	// read the high scores from local storage
	// use JSON.parse to convert to an array
	// add the user and their score
	// sort the array
	// use JSON.stringify to convert to a string
	// update the value in localstorage
}

// create a function for showing high scores
// read the high scores from local storage
// use JSON.parse to convert to an array
// loop through all elements in the array and add to the page.

// for (var i = 0; i<array.length; i++)
// create a div html element .createElement
// add the user name and score to the html element  .innerHTML=
//  document.querySelector("#highscore").append(newly created element)

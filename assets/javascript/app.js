

$(document).ready(function(){

var questions =["Surgical procedures have been around for at least 12,000 years. What was the earliest known surgical procedure?", "About how many years ago did humans start farming?", "Anatomically modern humans, so humans that are like us physically, are at least how old?", 
"The first evidence of behavior modernity, meaning humans wth similar cognitive ability in thinking, planning, and creativity, was roughly how many years ago?",
"The human family has had 7 known species. What was the last hominid to go extinct?", "As humans were transitioning from the Stone Age to the Bronze Age, what metal was commonly used in toolmaking?", "What modern practice was not necessary for the bulk of human existence?", "What were the earliest musical instruments that closely resemble instruments of today?"]

var answers =[["Cosmetic surgery to lengthen the neck or legs", "Trepanation, a process of drilling a hole in one’s head to relieve pressure and treat ailments", "The removing of the appendix", "Caesarean section"],
["5,000 years ago", "27,000 years ago", "12,000 years ago", "20,000 years ago"], ["500,000 years old", "250,000 years old", "50,000 years old", "25,000 years old"],
["45,000 years ago", "30,000 years ago", "100,000 years ago", "85,000 years ago"], ["homo erectus", "homo habilis", "homo heidelbergensis", "homo neanderthalensis"], 
["copper", "silver", "gold", "lead"], ["Babysitting", "Screening one's self from the sun",  "Grooming", "Brushing teeth"], ["Drums","Flutes", "Lyres, guitar like instruments", "Didgeridoo"]];

var correctAnswer =["Trepanation, a process of drilling a hole in one’s head to relieve pressure and treat ailments", "12,000 years ago", "250,000 years old", "45,000 years ago", "homo neanderthalensis", "copper", "Brushing teeth", "Flutes"];
var imageArray =["<img class='image' src='assets/images/Trepanation.jpg'>", "<img  class='image' src='assets/images/earlyFarming.jpg'>", "<img class='image' src='assets/images/modernHumans.jpeg'>", "<img class='image' src='assets/images/cromagnum.jpeg'>", "<img class='image' src='assets/images/neanderthal.jpeg'>", "<img class='image' src='assets/images/copperTools.jpeg'>", "<img class='image' src='assets/images/Teeth.jpeg'>", "<img class='image' src='assets/images/flutes.jpeg'>"]
var counter = 30;
var incorrect = 0;
var correct = 0;
var selected;
var questionCounter = 0;
var counterClock;


function initialScreen() {
	$("#main").html("<p id='begin'>Start</p>");
	$("#begin").click(mainContent);
}	
		
initialScreen()

function countdown() {
	intervalID = setInterval(decrement, 1000);
	function decrement() {
		if (counter === 0) {
			stop();
			outOftime();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function mainContent() {
	
	$("#main").html("<p>Time Remaining:<span class='timer'>" + counter + "</span></p>" + "<p>" + questions[questionCounter] + "</p>" + "<p class='answersclick'>" + answers[questionCounter][0] + "</p>" + "<p class='answersclick'>" + answers[questionCounter][1] + "</p>" + "<p class='answersclick'>" + answers[questionCounter][2] + "</p>" + "<p class='answersclick'>" + answers[questionCounter][3] + "</p>");
	counter=30;
	countdown()
}
console.log(mainContent);

function win() {
	correct++;
	$("#main").html("<p>Correct! The answer is: " + correctAnswer[questionCounter] + "</p><br>" + imageArray[questionCounter] + "<p></p>")
	setTimeout(next, 4000);
	stop();
}

function loss() {
	incorrect++;
	$("#main").html("<p>Wrong! The answer is: " + correctAnswer[questionCounter] + "</p><br>" + imageArray[questionCounter] + "<p></p>")
	setTimeout(next, 4000);
	stop();
}

function outOftime() {
	incorrect++;
	$("#main").html("<p>Out of time! The answer is: " + correctAnswer[questionCounter] + "</p><br>" + imageArray[questionCounter] + "<p></p>")
	setTimeout(next, 4000);
}

function finalScreen() {
	$("#main").html("<p>You got " + correct + " correct and " + incorrect + " incorrect</p><br><p id='reset'>Try Again?</p>")
	stop();
	$("#reset").click(newGame);
}

// $("#reset").click(newGame);

function newGame() {
	questionCounter = 0
	incorrect = 0;
	correct = 0;
	initialScreen();
}

function stop() {
	clearInterval(intervalID);
}

function next() {
	if (questionCounter < 7) {
		questionCounter++;
		mainContent();
		
		
	}
	else {
		finalScreen();
	}
	}

$("#main").on("click", ".answersclick", function(event) {
	
	selected = $(this).text();
	console.log(this);
	if (selected === correctAnswer[questionCounter]) {
		stop();
		win();
	}

	else {
		stop();
		loss();
	}

	});




});


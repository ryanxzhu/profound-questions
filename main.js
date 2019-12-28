const backIcon = document.getElementById('backIcon');
var questionsList = [];
var count = 0;

//---------------------Intiiate---------------------

updateSizes();
shuffleQuestions();
newQuestion();
document.fonts.ready.then(function() {
	backIcon.style.visibility = 'visible';
});

//---------------------Functions---------------------

function updateSizes() {
	document.getElementsByTagName('div')[0].style.width = window.innerWidth * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.height = window.innerHeight * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.padding = '0px ' + window.innerWidth * 0.05 + 'px';
	document.getElementsByTagName('div')[0].style.fontSize =
		Math.sqrt(window.innerWidth * window.innerHeight) * 0.08 + 'px';
	backIcon.style.width = Math.sqrt(window.innerWidth * window.innerHeight) * 0.15 + 'px';
}

function newQuestion() {
	if (count >= questionsList.length) {
		count = 0;
	}
	document.getElementsByTagName('div')[0].textContent = questionsList[count];
	count++;
}

function shuffleQuestions() {
	while (questionsArray.length > 0) {
		let randomInt = Math.floor(Math.random() * questionsArray.length);
		questionsList.push(questionsArray[randomInt]);
		questionsArray.splice(randomInt, 1);
	}
}

//---------------------Events---------------------

document.getElementsByTagName('div')[0].addEventListener('mousedown', function() {
	newQuestion();
});

backIcon.addEventListener('mousedown', function() {
	if (count > 1) {
		count--;
		document.getElementsByTagName('div')[0].textContent = questionsList[count - 1];
	}
});

document.body.onkeyup = function(e) {
	if (e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 38) {
		// 8 is backspace, 37 is left arrow, 38 is up arrow
		if (count > 1) {
			count--;
			document.getElementsByTagName('div')[0].textContent = questionsList[count - 1];
		}
	}

	if (e.keyCode == 32 || e.keyCode == 39 || e.keyCode == 40) {
		// 32 is spacebar, 39 is right arrow, 40 is down arrow
		newQuestion();
	}
};

window.addEventListener('resize', updateSizes);
window.addEventListener('orientationchange', updateSizes);

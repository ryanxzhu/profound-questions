const refreshIcon = document.getElementById('refreshIcon');
var previousQuestion = [];

//---------------------Intiiate---------------------

updateSizes();
newQuestion();

//---------------------Functions---------------------

function updateSizes() {
	document.getElementsByTagName('div')[0].style.width = window.innerWidth * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.height = window.innerHeight * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.padding = '0px ' + window.innerWidth * 0.05 + 'px';
	document.getElementsByTagName('div')[0].style.fontSize =
		Math.sqrt(window.innerWidth * window.innerHeight) * 0.08 + 'px';
	refreshIcon.style.width = Math.sqrt(window.innerWidth * window.innerHeight) * 0.15 + 'px';
}

function newQuestion() {
	if (previousQuestion.length === 2) {
		previousQuestion.shift();
	}
	let randomInt = Math.floor(Math.random() * questionsArray.length);
	document.getElementsByTagName('div')[0].textContent = questionsArray[randomInt];
	previousQuestion.push(questionsArray[randomInt]);
}

//---------------------Events---------------------

document.getElementsByTagName('div')[0].addEventListener('mousedown', function() {
	newQuestion();
});

refreshIcon.addEventListener('mousedown', function() {
	if (previousQuestion.length > 1) {
		document.getElementsByTagName('div')[0].textContent = previousQuestion[0];
		previousQuestion.pop();
	}
});

window.addEventListener('resize', updateSizes);
window.addEventListener('orientationchange', updateSizes);

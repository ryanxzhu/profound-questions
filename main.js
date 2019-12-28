const refreshIcon = document.getElementById('refreshIcon');

//---------------------Intiiate---------------------

updateSizes();
document.getElementsByTagName('div')[0].textContent = questionsArray[13];

//---------------------Functions---------------------

function updateSizes() {
	document.getElementsByTagName('div')[0].style.width = window.innerWidth * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.height = window.innerHeight * 0.99 + 'px';
	document.getElementsByTagName('div')[0].style.padding = '0px ' + window.innerWidth * 0.05 + 'px';
	document.getElementsByTagName('div')[0].style.fontSize =
		Math.sqrt(window.innerWidth * window.innerHeight) * 0.08 + 'px';
	refreshIcon.style.width = Math.sqrt(window.innerWidth * window.innerHeight) * 0.07 + 'px';
	refreshIcon.style.margin =
		Math.sqrt(window.innerWidth * window.innerHeight) * 0.02 +
		'px ' +
		Math.sqrt(window.innerWidth * window.innerHeight) * 0.05 +
		'px';
}

function newQuestion() {
	let randomInt = Math.floor(Math.random() * questionsArray.length);
	document.getElementsByTagName('div')[0].textContent = questionsArray[randomInt];
}

//---------------------Events---------------------

document.getElementsByTagName('div')[0].addEventListener('mousedown', function() {
	newQuestion();
});

window.addEventListener('resize', updateSizes);
window.addEventListener('orientationchange', updateSizes);

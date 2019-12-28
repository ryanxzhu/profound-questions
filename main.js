console.log(questionsArray.length);
document.body.style.height = window.innerHeight * 0.99 + 'px';
document.body.style.fontSize = Math.sqrt(window.innerWidth * window.innerHeight) * 0.08 + 'px';
document.body.style.padding = '0px ' + window.innerWidth * 0.05 + 'px';

//document.body.textContent = questionsArray[Math.floor(Math.random() * questionsArray.length)];
document.body.textContent = questionsArray[13];

function updateSizes() {
	document.body.style.width = window.innerWidth * 0.99 + 'px';
	document.body.style.height = window.innerHeight * 0.99 + 'px';
	document.body.style.padding = '0px ' + window.innerWidth * 0.05 + 'px';
	document.body.style.fontSize = Math.sqrt(window.innerWidth * window.innerHeight) * 0.08 + 'px';
}

function newQuestion() {
	let randomInt = Math.floor(Math.random() * questionsArray.length);
	document.body.textContent = questionsArray[randomInt];
}
document.body.addEventListener('mousedown', function() {
	newQuestion();
});

window.addEventListener('resize', updateSizes);
window.addEventListener('orientationchange', updateSizes);

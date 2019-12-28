console.log(questionsArray.length);
document.body.style.height = window.innerHeight * 0.99 + 'px';
document.body.style.fontSize = window.innerHeight * 0.1 + 'px';
document.body.style.padding = '0px ' + window.innerWidth * 0.05 + 'px';

document.body.textContent = questionsArray[Math.floor(Math.random() * questionsArray.length)];

document.body.addEventListener('mousedown', function() {
	document.body.textContent = questionsArray[Math.floor(Math.random() * questionsArray.length)];
});

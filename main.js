console.log(questionsArray.length);
document.body.style.height = window.innerHeight * 0.99 + 'px';
document.body.style.fontSize = window.innerWidth * 0.05 + 'px';
document.body.style.padding = '0px ' + window.innerWidth * 0.05 + 'px';

//document.body.textContent = questionsArray[Math.floor(Math.random() * questionsArray.length)];
document.body.textContent = questionsArray[15];

function newQuestion() {
	let randomInt = Math.floor(Math.random() * questionsArray.length);
	document.body.textContent = questionsArray[randomInt];
}
document.body.addEventListener('mousedown', function() {
	newQuestion();
});

var questionsLength = [];
for (let i = 0; i < questionsArray.length; i++) {
	questionsLength.push(questionsArray[i].length);
}

questionsLength.sort(function(a, b) {
	return a - b;
});

console.log(questionsLength);

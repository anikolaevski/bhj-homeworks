const timer = document.getElementById('timer');
let secondsLeft = parseInt(timer.textContent, 10);

const recalc = function () {
	timer.textContent = secondsLeft.toString();
	secondsLeft -= 1;
	if (secondsLeft <= 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе');
	}
}

let interval = setInterval(recalc, 1000);

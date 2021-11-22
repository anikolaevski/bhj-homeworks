const showDead = document.getElementById('dead');
const showLost = document.getElementById('lost');

const score = {
	dead: 0,
	lost: 0
};

const catchMole = function (evt) {
	const cell = evt.target;
	if (cell.className.includes('hole_has-mole')) {
		score.dead += 1;
	} else {
		score.lost += 1
	}
	if (score.dead >= 10) {
		alert('Вы выиграли!');
		zeroScore();
	}
	if (score.lost >= 5) {
		alert('Вы проиграли!');
		zeroScore();
	}
	showDead.textContent = score.dead;
	showLost.textContent = score.lost;
}

function zeroScore() {
	score.dead = 0;
	score.lost = 0;
}

for (let k = 1; k <= 9; k++) {
	document.getElementById(`hole${k}`).onclick = catchMole;
}

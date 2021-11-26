const modal_main = document.getElementById('modal_main');
const show_success = document.querySelector('.show-success');
const modal_success = document.getElementById('modal_success');

if(modal_main) {
	modal_main.classList.add('modal_active');
	modal_main.querySelector('.modal__close').onclick = function() {
		console.log('Main popup closed!!!');
		modal_main.classList.remove('modal_active');
	}
}

if (show_success) {
	show_success.onclick = function (evt) {
		console.log('show_success!!!');
		modal_success.classList.add('modal_active');
	}
}

const modal_main = document.getElementById('modal_main');
const show_success = document.querySelector('.show-success');
const modal_success = document.getElementById('modal_success');
const modal_close_times = document.querySelectorAll('.modal__close_times');

for ( let k = 0; k < modal_close_times.length; k++ ) {
	modal_close_times[k].onclick = function() {
		const popup = modal_close_times[k].closest('.modal');
		if (popup) {
			popup.classList.remove('modal_active');
		}
	}
}

if(modal_main) {
	modal_main.classList.add('modal_active');
}

if (show_success && modal_success) {
	show_success.onclick = function (evt) {
		console.log('show_success!!!');
		modal_success.classList.add('modal_active');
		if(modal_main) {
			modal_main.classList.remove('modal_active');
		}
	}
}

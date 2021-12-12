const storageName = 'Netology_User';
const form = document.getElementById('signin__form');
const user_id = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
welcome.insertAdjacentHTML('afterend','<p id="error_message" class="welcome">Неверный логин/пароль</p>');
const errorMessage = document.getElementById('error_message');
const signinBtn = document.getElementById('signin__btn');
signinBtn.insertAdjacentHTML('afterend','<button id="signoff__btn" style="margin-left:15px;">Выйти</button>');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    let xhr=new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function() {
        if( this.readyState == this.DONE && this.status == 200 ) {
            const obj = JSON.parse(this.responseText);
            // console.log(obj);
            if (obj.success) {
                showWelcome(obj.user_id);
                localStorage.setItem(storageName, obj.user_id);
            } else {
                showWelcome();
                localStorage.removeItem(storageName);
            }
            form.reset();
        }
    });
    xhr.open('POST', form.getAttribute('action'), true);
    xhr.send(formData);
});

document.getElementById('signoff__btn').addEventListener('click', function(evt) {
    evt.preventDefault();
    welcome.classList.remove('welcome_active');
    errorMessage.classList.remove('welcome_active');
    form.reset();
    localStorage.removeItem(storageName);
});

function showWelcome(text) {
    if (text) {
        user_id.textContent = text;
        welcome.classList.add('welcome_active');
        errorMessage.classList.remove('welcome_active');
    } else {
        welcome.classList.remove('welcome_active');
        errorMessage.classList.add('welcome_active');
    }
}

window.onload = function() {
    const userId = localStorage.getItem(storageName);
    if (userId && userId.trim()) {
        showWelcome(userId);
    }
}

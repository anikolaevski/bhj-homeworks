const storageName = 'Netology_User';
const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
welcome.insertAdjacentHTML('beforeend','<button class="btn" id="signoff__btn">Выйти</button>');
welcome.insertAdjacentHTML('afterend','<p id="error_message" class="welcome">Неверный логин/пароль</p>');
const errorMessage = document.getElementById('error_message');

// Логин
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    let xhr=new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function() {
        if( this.readyState == this.DONE && this.status == 200 ) {
            const obj = JSON.parse(this.responseText);
            // console.log(obj);
            if (obj.success) {
                switchState({
                    text: obj.user_id,
                    success: true
                });
                localStorage.setItem(storageName, obj.user_id);
            } else {
                switchState({
                    text: '',
                    success: false
                });
                localStorage.removeItem(storageName);
            }
            form.reset();
        }
    });
    xhr.open('POST', form.getAttribute('action'), true);
    xhr.send(formData);
});

// Нажатие на кнопку "Выйти"
document.getElementById('signoff__btn').addEventListener('click', function(evt) {
    evt.preventDefault();
    switchState({
        text: '',
        success: true
    });
    form.reset();
    localStorage.removeItem(storageName);
});

// Переключение состояния экрана
function switchState(obj) {
    if (obj.success && obj.text) {
        // Успешный логин
        document.getElementById('user_id').textContent = obj.text;
        welcome.classList.add('welcome_active');
        errorMessage.classList.remove('welcome_active');
        signin.classList.add('welcome');
    } else if (obj.success) {
        // Выход
        welcome.classList.remove('welcome_active');
        errorMessage.classList.remove('welcome_active');
        signin.classList.remove('welcome');
    } else {
        // Неуспешный логин
        welcome.classList.remove('welcome_active');
        errorMessage.classList.add('welcome_active');
        signin.classList.remove('welcome');           
    }
}

window.onload = function() {
    const userId = localStorage.getItem(storageName);
    if (userId && userId.trim()) {
        switchState({
            text: userId,
            success: true
        });
    }
}

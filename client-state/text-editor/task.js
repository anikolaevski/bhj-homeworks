const storageName = 'Netology-editor';
const editor = document.getElementById('editor');
editor.insertAdjacentHTML('afterend','<button id="clear__button">Очистить</button>');

editor.addEventListener('input', function(evt) {
    evt.preventDefault();
    saveContent(this.value);
});

document.getElementById('clear__button').addEventListener('click', function(evt) {
    evt.preventDefault();
    editor.value = '';
    clearContent();
});

function loadContent() {
    try {
        const loaded = localStorage.getItem(storageName);
        editor.value = loaded;        
    } catch(err) {
        alert (err);
    }
}

function saveContent(value) {
    localStorage.setItem(storageName, value);
}

function clearContent() {
    localStorage.removeItem(storageName);
}

loadContent();

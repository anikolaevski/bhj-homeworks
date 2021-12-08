const form = document.getElementById('form');
const progress = document.getElementById('progress');
const sendButton = document.getElementById('send');


sendButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    const file = document.getElementById('file').value;
    formData.append('file', file);
    console.log('formData=', formData);
    
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = function (req) {
        // console.log(16, this.readyState, this.getResponseHeader('content-length'));
        console.log(16, this.readyState, this.getAllResponseHeaders());
    };

    xhr.onprogress = function(event) {
        // console.log(event.currentTarget);
        // const totalBytes = event.currentTarget.getResponseHeader('content-length');
        const {loaded, total} = event; 
        // console.log( 'Получено с сервера ' + loaded + ' байт из ' + total );
        const x = 1;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(formData);
    


});

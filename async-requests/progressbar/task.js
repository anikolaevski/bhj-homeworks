const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const fileDesc = document.querySelector(".input__wrapper-desc");
const progress = document.getElementById('progress');

form.setAttribute('enctype', 'multipart/form-data');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    const file = fileInput.files[0];
    const fileName = fileDesc.textContent
    formData.append('file', file, fileName);
    let xhr=new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        const {loaded, total} = event; 
        progress.value = Math.round((loaded / total) * 100) / 100;
        fileDesc.textContent = `${fileName}  ${loaded}/${total}`;
        // console.log( 'Загружено ' + loaded + ' байт из ' + total, progress.value );
    }
    xhr.open('POST', form.getAttribute('action'), true);
    xhr.send(formData);
});


const cookieName = 'subscribemodal';
const subscribeModal = document.getElementById('subscribe-modal');

subscribeModal.querySelector('.modal__close_times')
    .addEventListener('click', function(evt) {
        evt.preventDefault();
        subscribeModal.classList.remove('modal_active');
        document.cookie = `${cookieName}=done; max-age=3600000; SameSite=Lax;`;
    });

function getCookie(name) {
    const value = "; "+document.cookie;
    console.log(13, value, window.location);
    let parts = value.split("; "+name+"=");
    if(parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

window.onload = function() {
    const showStatus = getCookie(cookieName);
    console.log(`${cookieName} cookie:`, showStatus);
    if (showStatus !== 'done') {
        subscribeModal.classList.add('modal_active');
    }
}





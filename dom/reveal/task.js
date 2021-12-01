const reveal = document.querySelectorAll('.reveal');

document.onscroll = function () {
    for (let k = 0; k < reveal.length; k++) {
        const elementTop = reveal[k].getBoundingClientRect().top;
        const elementBottom = reveal[k].getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            reveal[k].classList.add('reveal_active');
        } else {
            reveal[k].classList.remove('reveal_active');
        }
        // console.log(k, reveal[k].className, elementTop, elementBottom, window.innerHeight);
    }
}

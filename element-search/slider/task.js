const slider = {
    items: document.querySelectorAll('.slider__item'),
    dots: document.querySelectorAll('.slider__dot'),
    currentPosition: 0,
    previousPosition: 0
};

function redrawSlider () {
    slider.items[slider.previousPosition].classList.remove('slider__item_active');
    slider.items[slider.currentPosition].classList.add('slider__item_active');
    slider.dots[slider.previousPosition].classList.remove('slider__dot_active');
    slider.dots[slider.currentPosition].classList.add('slider__dot_active');
}

document.querySelector('.slider__arrow_next').onclick = function () {
    slider.previousPosition = slider.currentPosition;
    if (slider.currentPosition === slider.items.length - 1) {
        slider.currentPosition = 0;
    } else {
        slider.currentPosition += 1;
    }
    redrawSlider();
}

document.querySelector('.slider__arrow_prev').onclick = function () {
    slider.previousPosition = slider.currentPosition;
    if (slider.currentPosition <= 0) {
        slider.currentPosition = slider.items.length - 1;
    } else {
        slider.currentPosition -= 1;
    }
    redrawSlider();
}

for (let k = 0; k < slider.dots.length; k++) {
    slider.dots[k].onclick = function () {
        slider.previousPosition = slider.currentPosition;
        slider.currentPosition = k;
        redrawSlider();
    }
}

redrawSlider();

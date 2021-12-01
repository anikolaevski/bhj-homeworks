const bookControl = document.querySelector('.book__control');
const bookContent = document.querySelector('.book__content');

if (bookControl && bookContent) {
    const controls = bookControl.querySelectorAll('.font-size');
    for (let k = 0; k < controls.length; k++) {
        controls[k].onclick = function (evt) {
            evt.preventDefault();
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.remove('book_fs-small');
            if (evt.target.classList.contains('font-size_small')) {
                bookContent.classList.add('book_fs-small');
            } else if (evt.target.classList.contains('font-size_big')) {
                bookContent.classList.add('book_fs-big');
            }
        }
    }
}

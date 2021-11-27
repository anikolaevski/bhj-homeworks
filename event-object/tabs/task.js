const tabs = document.querySelectorAll('.tabs');

for (let i = 0; i < tabs.length; i++) {

    const tab = tabs[i].querySelector('.tab__navigation')
    .querySelectorAll('.tab');
    const tab_content = tabs[i].querySelectorAll('.tab__content');
    let currentIndex = 0;
    let previousIndex = 0;

    for (let k = 0; k < tab.length; k++) {
        if (tab[k].classList.contains('tab_active')) {
            currentIndex = k;
        }
        tab[k].onclick = function() {
            previousIndex = currentIndex;
            currentIndex = k;
            tab[previousIndex].classList.remove('tab_active');
            tab_content[previousIndex].classList.remove('tab__content_active');
            tab[currentIndex].classList.add('tab_active');
            tab_content[currentIndex].classList.add('tab__content_active');
        }
    }
}




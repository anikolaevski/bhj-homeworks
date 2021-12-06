const hasTooltip = document.querySelectorAll('.has-tooltip');
hasTooltip.forEach(o => {
    o.addEventListener('click', (evt) => {
        evt.preventDefault();
        let is_active = o.getAttribute('data-tooltip');
        for (let k = 0; k < hasTooltip.length; k++) {
            hasTooltip[k].removeAttribute('data-tooltip');
        }
        const tooltips = document.querySelectorAll('.tooltip_active');
        for (let k = 0; k < tooltips.length; k++) {
            tooltips[k].remove();
        }
    // o.removeAttribute('data-tooltip');
        if (!is_active) {
            const {bottom, left} = o.getBoundingClientRect();
            // console.log(o.title, bottom, window.scrollY );
            const el = document.createElement('div');
            el.innerText = o.title;
            o.parentElement.appendChild(el);
            el.style.position = 'absolute';
            el.style.color = 'rgba(256,256,256,1)';
            el.style.background = 'rgba(0,0,0,1)';
            el.style.zIndex = '1000';
            el.style.width = `${o.offsetWidth}px`;
            el.style.left = `${left}px`;
            el.style.top = `${window.scrollY + bottom}px`;
            el.classList.add('tooltip_active');
            o.setAttribute('data-tooltip','1');
        } 
        // else {
            // o.removeAttribute('data-tooltip');
        // }
    });
});


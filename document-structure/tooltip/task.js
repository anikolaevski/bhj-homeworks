const has_tooltip = document.querySelectorAll('.has-tooltip');

has_tooltip.forEach(o => {
    o.addEventListener('click', (evt) => {
        evt.preventDefault();
        const tooltips = document.querySelectorAll('.tooltip_active');
        for (let k = 0; k < tooltips.length; k++) {
            tooltips[k].remove();
        }
        const {bottom, left} = o.getBoundingClientRect();
        // console.log(o.title, bottom, window.scrollY );
        const el = document.createElement('div');
        el.innerText = o.title;
        o.parentElement.appendChild(el);
        el.classList.add('tooltip_active');
        el.style.position = 'absolute';
        el.style.color = 'rgba(256,256,256,1)';
        el.style.background = 'rgba(0,0,0,1)';
        el.style.zIndex = '1000';
        el.style.width = `${o.offsetWidth}px`;
        el.style.left = `${left}px`;
        el.style.top = `${window.scrollY + bottom}px`;
    });
});

// function showTooltip(el) 

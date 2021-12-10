const items = document.getElementById('items');
const loader = document.getElementById('loader');
const rates = [];

function getCurrencyRates() {
    let xhr=new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.addEventListener('readystatechange', function() {
        if( this.readyState == this.DONE && this.status == 200 ) {
            rates.splice(0, rates.length);
            const fullData = JSON.parse(this.responseText);
            // console.log(12, fullData.response.Valute);
            Object.keys(fullData.response.Valute).forEach(o => {
                rates.push({
                    CharCode: fullData.response.Valute[o].CharCode,
                    Value: fullData.response.Valute[o].Value                    
                });
            });
            rebuildRates(rates);
            loader.classList.remove('loader_active');
        } else if (this.readyState == this.OPENED) {
            loader.classList.add('loader_active');
        }
    });
    xhr.send();
}

function rebuildRates(arr) {
    if (!items || arr.length === 0) { 
        return; 
    }
    let html = '';
    arr.forEach( o => {
        html += '<div class="item">'
        html += `<div class="item__code">${o.CharCode}</div>`;
        html += `<div class="item__value">${o.Value}</div>`;
        html += `<div class="item__currency">руб.</div>`;
        html += '</div>'
    });
    items.innerHTML = html;
}

getCurrencyRates();

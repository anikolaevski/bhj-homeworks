
window.onload=function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    for (let k = 0; k < dropdowns.length; k++) {
        const dropdown_value = dropdowns[k].querySelector('.dropdown__value');
        const dropdown_list = dropdowns[k].querySelector('.dropdown__list');
        if (dropdown_list) {
            // открытие/закрытие выпадающего списка
            dropdowns[k].onclick = function () {
                if (dropdown_list.classList.contains('dropdown__list_active')) {
                    dropdown_list.classList.remove('dropdown__list_active');
                } else {
                    dropdown_list.classList.add('dropdown__list_active');
                }
            }
            // выбор из списка
            const dropdown_items = dropdown_list.querySelectorAll('.dropdown__item');
            for (let m = 0; m < dropdown_items.length; m++) {
                const link = dropdown_items[m].querySelector('.dropdown__link');
                if (link) {
                    // Запрет перехода по ссылке
                    link.onclick = function(event) {
                        event.preventDefault();
                    }
                    // Извлечение текста пункта меню
                    dropdown_items[m].onclick = function() {
                        console.log(`click: ${link.textContent.trim()}`);
                        dropdown_value.textContent = link.textContent;
                    }
                }
            }
        }
    }
}

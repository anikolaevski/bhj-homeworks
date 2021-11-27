const menu_sub = document.querySelectorAll('.menu_sub');
const active_items = [];

for (let k = 0; k < menu_sub.length; k++) {
  // присваиваем ID элементу меню
  if (!menu_sub[k].id) {
    menu_sub[k].setAttribute('id', `menu_item${k}`);
  }
  
  // получаем ссылку на пункт верхнего меню
  const menu_item = menu_sub[k].closest('ul .menu__item');
  // подписываемся на показ меню
  menu_item.onclick = function() {
    // Открыто ли текущее меню?
    const isCurrentMenuOpen = (menu_sub[k].classList.contains('menu_active'));

    // выключение активных меню
    active_items.forEach((o) => {
      const el = document.getElementById(o);
      if (el) {
        el.classList.remove('menu_active');
      }
    });
    
    if (!isCurrentMenuOpen) {
      // активация выбранного меню
      menu_sub[k].classList.add('menu_active');
      // сохранение активного меню
      active_items.splice(0, active_items.length);
      active_items.push(menu_sub[k].id);
    }
  }

  // Получаем дочернюю ссылку пункта меню
  const link = menu_item.querySelector('a');
  // запрещаем клик на ссылке
  link.onclick = function(evt) {
    evt.preventDefault();
  } 
}

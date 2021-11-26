const menu_sub = document.querySelectorAll('.menu_sub');
const active_items = [];

for (let k = 0; k < menu_sub.length; k++) {
  // ����������� ID �������� ����
  if (!menu_sub[k].id) {
    menu_sub[k].setAttribute('id', `menu_item${k}`);
  }
  
  // �������� ������ �� ����� �������� ����
  const menu_item = menu_sub[k].closest('ul .menu__item');
  // ������������� �� ����� ����
  menu_item.onclick = function() {
    // ���������� �������� ����
    active_items.forEach((o) => {
      const el = document.getElementById(o);
      if (el) {
        el.classList.remove('menu_active');
      }
    });
    // ��������� ���������� ����
    menu_sub[k].classList.add('menu_active');
    // ���������� ��������� ����
    active_items.splice(0, active_items.length);
    active_items.push(menu_sub[k].id);
  }

  // �������� �������� ������ ������ ����
  const link = menu_item.querySelector('a');
  // ��������� ���� �� ������
  link.onclick = function(evt) {
    evt.preventDefault();
  } 
}

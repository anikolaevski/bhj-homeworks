const interest = document.querySelectorAll('ul .interests_active');
// console.log(interest);

for (let k = 0; k < interest.length; k++) {
    // input 1-го уровня
    const upper = interest[k].closest('li');
    const inp1 = upper.querySelector('input');
    // console.log(1, inp1);
    // input 2-го уровня
    const inps2 = interest[k].querySelectorAll('input');
    // console.log(2, inps2);
    // Передача checked сверху вниз
    inp1.addEventListener('change', () => {
        for (let i = 0; i < inps2.length; i++) {
            inps2[i].checked = inp1.checked;
        }
    });
    // Передача checked снизу вверх
    for (let i = 0; i < inps2.length; i++) {
        inps2[i].addEventListener('change', () => {
            const checked = GroupChecked(inps2);
            if (checked === 1) {
                inp1.checked = true;
                inp1.indeterminate = false;
            } else if (checked === -1) {
                inp1.checked = false;
                inp1.indeterminate = false;
            } else {
                inp1.indeterminate = true;
            }
        });
    }
}

// 1 - все выбраны
// -1 - все не выбраны
// 0 - промежуточное состояние
function GroupChecked(group) {
    const state = {
        checks: false,
        unchecks: false
    };
    for (let i = 0; i < group.length; i++) {
        if (group[i].checked) {
            state.checks = true;
        } else {
            state.unchecks = true;
        }
    }
    if (state.checks && !state.unchecks) {
        return 1;
    } else if (!state.checks && state.unchecks) {
        return -1;
    } return 0;
}

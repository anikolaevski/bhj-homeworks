const tasksInput = document.querySelector('#task__input');
const tasksAdd = document.querySelector('#tasks__add');
const tasksList = document.querySelector('#tasks__list');

const storageName = 'Netology-tasks';
tasksAdd.setAttribute('title','Создать задачу');
loadContent(storageName);

tasksAdd.addEventListener('click', (evt) => {
    evt.preventDefault();
    const taskName = tasksInput.value;
    if (!taskName.trim()) { return; }
    tasksInput.value = '';
    createTask(taskName);
    saveContent(storageName);
});

// Создание одной задачи
function createTask(taskName) {
    const task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML = `<div class="task__title">
      ${taskName}
    </div>
    <a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(task);
    task.setAttribute('title','Удалить задачу');
    setTaskEvents(task);
}

// Обработчик событий для созданной задачи
function setTaskEvents(task) {
    task.querySelector('.task__remove').addEventListener('click', (evt) => {
        evt.preventDefault();
        task.remove();
        saveContent(storageName);
    });
}

// Загрузка задач
function loadContent(name) {
    const loaded = JSON.parse(localStorage.getItem(name));
    tasksList.innerHTML = loaded;
    const tasks = tasksList.querySelectorAll('.task');
    tasks.forEach(o => { setTaskEvents(o); });
}

// Сохранение задач
function saveContent(name) {
    const string = JSON.stringify(tasksList.innerHTML);
    localStorage.setItem(name, string);
}

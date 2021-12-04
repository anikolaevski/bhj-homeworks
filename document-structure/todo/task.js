const tasksInput = document.querySelector('#task__input');
const tasksAdd = document.querySelector('#tasks__add');
const tasksList = document.querySelector('#tasks__list');

const storageName = 'Netology-tasks';
let tasksArray = [];
let taskCounter = 0;
tasksAdd.setAttribute('title','Создать задачу');
const loaded = loadContent(storageName);
if (loaded) {
    tasksArray = loaded;
    tasksArray.forEach(o => {
        createTask(o.name, o.id);
        taskCounter = o.id + 1;
    });
}
// console.log(tasksArray);

tasksAdd.addEventListener('click', (evt) => {
    evt.preventDefault();
    const taskName = tasksInput.value;
    const taskId = taskCounter++;
    if (!taskName) { return; }
    createTask(taskName, taskId);
    tasksArray.push({
        id: taskId,
        name: taskName
    });
    saveContent(tasksArray, storageName);
});

// Создание одной задачи
function createTask(taskName, taskId) {
    const task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML = `<div class="task__title">
      ${taskName}
    </div>
    <a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(task);
    task.setAttribute('title','Удалить задачу');
    task.dataset['taskId'] = taskId;
    task.querySelector('.task__remove').addEventListener('click', (evt) => {
        evt.preventDefault();
        task.remove();
        const index = tasksArray.findIndex(o => o.id === taskId);
        if (index > -1) {
            tasksArray.splice(index, 1);
            saveContent(tasksArray, storageName);
        }
    });
}

// Загрузка задач
function loadContent(name) {
    const loaded = JSON.parse(localStorage.getItem(name));
    return loaded;
}

// Сохранение задач
function saveContent(obj, name) {
    // const string = `{arr:${JSON.stringify(obj)}}`;
    const string = JSON.stringify(obj);
    localStorage.setItem(name, string);
}

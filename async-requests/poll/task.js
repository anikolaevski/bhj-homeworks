const poll = document.querySelector('.poll');

// Получение очередного вопроса
function getPollData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.addEventListener('readystatechange', function() {
        if( this.readyState == this.DONE && this.status == 200 ) {
            const obj = JSON.parse(this.responseText);
            // console.log(obj);
            showPollQuestion(obj);
        }
    });
    xhr.send();
}

// Показ вопроса
function showPollQuestion(obj) {
    const id = obj.id;
    const {answers, title} = obj.data;
    poll.innerHTML = '';
    const pollTitle = document.createElement('div');
    pollTitle.setAttribute('id', 'poll__title');
    pollTitle.className = 'poll__title';
    pollTitle.innerText = title;
    poll.appendChild(pollTitle);
    const pollanswers = document.createElement('div');
    pollanswers.setAttribute('id', 'poll__answers');
    pollanswers.className = 'poll__answers poll__answers_active';
    poll.appendChild(pollanswers);
    for (let k = 0; k < answers.length; k++) {
        const button = document.createElement('button');
        button.innerText = answers[k];
        pollanswers.appendChild(button);
        const answerData = {
            vote: id,
            answer: k,
            answerText: answers[k]
        };
        button.addEventListener('click', () => { applyAnswer(answerData) });
    };
}

// Отправка ответа
function applyAnswer (data) {
    const xhr = new XMLHttpRequest;
    xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.addEventListener('readystatechange', function() {
        if( this.readyState == this.DONE && this.status == 200 ) {
            const obj = JSON.parse(this.responseText);
            // console.log(obj);
            displayAnswers(obj, data.answerText);
        }
    });
    const sendBody = prepBody({vote: data.vote, answer: data.answer});
    // console.log(sendBody);
    xhr.send( sendBody );
}

// Показ ответа и статистики
function displayAnswers(obj, answer) {
    const pollAnswers = document.getElementById('poll__answers');
    if (pollAnswers) {pollAnswers.remove()};
    const answersBody = document.createElement('div');
    answersBody.className = 'poll__title';
    answersBody.innerHTML = `<p>Спасибо! Ваш ответ "${answer}" очень важен для нас. Приходите ещё!</p>
    <p>Статистика ответов на этот вопрос:</p>`;
    const answersBodyUl = document.createElement('ul');
    answersBody.appendChild(answersBodyUl);
    poll.appendChild(answersBody);
    obj.stat.forEach(o => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${o.answer}</strong>:${o.votes}`;
        answersBodyUl.appendChild(li);
    });
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Следующий вопрос';
    answersBody.appendChild(nextButton);
    nextButton.addEventListener('click', () => {location.reload();})
}

function prepBody(obj) {
    let ret = '';
    Object.keys(obj).forEach(o => {
        if (ret.trim()) { ret += '&'; }
        ret += `${o}=${obj[o]}`;
    });
    return ret;
}

getPollData();

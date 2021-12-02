const phrases = [
    'Ваш звонок очень важен для нас',
    'В настоящий момент все операторы заняты. Дождитесь ответа оператора',
    'Как мне к Вам можно обращаться?',
    'Я Вас услышал',
    'Пожалуйста, оставайтесь на линии. Вам ответит любой освободившийся оператор',
    'Скажите, а Вас уже выпустили из сумасшедшего дома?',
    'Просто мы работаем для Вас',
    'В мире столько кокаина, а Вы суете нос в мои дела',
    'Привет, мы раньше не общались?',
    'Мои двери всегда открыты для Вас. Выходите.',
    'Я не хотел Вас обидеть, просто случайно повезло',
    'У меня сегодня нет сил делать вид, что Вы мне нравитесь'
];

const questions = [
    'Ау',
    'Ты там уснул?',
    'Проснись, наконец',
    'Хорош страдать ерундой, иди работать'
];

const chatState = {
    timeout: 0
};

const chatWidgetSide = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('#chat-widget__messages');
const chatWidgetInput = document.querySelector('#chat-widget__input');

// Генерация случайной фразы
const genPhrase = function(phrases) {
    const index = Math.floor(Math.random() * phrases.length);
    const text =  phrases[index];
    genMessage('', text);
    // console.log(index, phrases.length);
}

// Генерация сообщения в чат
function genMessage(className, text) {
    const Message = document.createElement('div');
    Message.className = `message ${className}`;
    const messageTime = document.createElement('div');
    messageTime.className = 'message__time';
    messageTime.innerText = new Date().toLocaleTimeString();
    const messageText = document.createElement('div');
    messageText.className = 'message__text';
    messageText.innerText = text;
    Message.appendChild(messageTime);
    Message.appendChild(messageText);
    chatWidgetMessages.appendChild(Message);
    Message.scrollIntoView(false);
}

// Открытие панели чата
chatWidgetSide.onclick = function() {
    chatWidget.classList.toggle('chat-widget_active');
    // Установка таймаута
    setInterval(() => {
        if (chatState.timeout >= 30) {
            genPhrase(questions);
            chatState.timeout = 0;
        }
        chatState.timeout += 1;
    }, 1000);
}

// Реакция на ввод пользовательского сообщения
chatWidgetInput.onchange = function(event) {
    const userText = event.target.value;
    genMessage('message_client', userText);
    chatState.timeout = 0;
    setTimeout(() => {
        genPhrase(phrases);
    }, 1000);
}


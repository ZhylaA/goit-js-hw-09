import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
// Мы подготовили для тебя объект который нужен для выполнения задания.
// Разберись за что отвечает каждое свойство в документации «Options» 
// и используй его в своем коде.
// Выбор даты
// Метод onClose() из обьекта параметров вызывается
// каждый раз при закрытии элемента интерфейса который создает flatpickr.
// Именно в нём стоит обрабатывать дату выбранную пользователем.
// Параметр selectedDates это массив выбранных дат,
//     поэтому мы берем первый элемент.
// Если пользователь выбрал дату в прошлом, покажи window.alert()
// с текстом "Please choose a date in the future".
// Если пользователь выбрал валидную дату (в будущем),
// кнопка «Start» становится активной.
// Кнопка «Start» должа быть не активна до тех пор,
// пока пользователь не выбрал дату в будущем.
// При нажатии на кнопку «Start» начинается отсчет времени
//  до выбранной даты с момента нажатия.
// Отсчет времени
// При нажатии на кнопку «Start» скрипт должен вычислять раз
// в секунду сколько времени осталось до указанной даты и
// обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты
// и секунды в формате xx: xx: xx: xx.
// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// 💡 Не будем усложнять. Если таймер запущен, для того чтобы выбрать
//  новую дату и перезапустить его - необходимо перезагрузить страницу.

// Для подсчета значений используй готовую функцию convertMs,
//  где ms - разница между конечной и текущей датой в миллисекундах.

// Библиотека уведомлений
// ⚠️ Следующий функционал не обязателен при сдаче задания,
// но будет хорошей дополнительной практикой.

// Для отображения уведомлений пользователю вместо window.alert()
// используй библиотеку notiflix.

// Библиотека ожидает что её инициализируют на элементе input[type = "text"],
//     поэтому мы добавили в HTML документ поле input#datetime - picker.
const refs = {
    inputClock: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    timer:document.querySelector('.timer'),
};
refs.startBtn.disabled = true;
refs.startBtn.style.backgroundColor = "blue";
refs.startBtn.style.color = "yellow";
refs.startBtn.style.width = "60px";
refs.startBtn.style.height = "30px";
refs.timer.style.display = "flex";
refs.timer.style.textAlign = "center";
// refs.hours.style.display = "flex";
// refs.minutes.style.display = "flex";
// refs.seconds.style.display = "flex";




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const inputDate = selectedDates[0];
        const currenTime = Date.now();
        const deltaTime = inputDate - currenTime;
        if (deltaTime > 0) { refs.startBtn.disabled = false; }
        else {
        Notiflix.Notify.failure("Please choose a date in the future");
        }
    },
};
const foo = flatpickr(refs.inputClock, options);
class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }
start() {
    if (this.isActive) { return; }
    const timeSelected = foo.selectedDates[0].getTime();
    this.isActive = true;

    this.intervalId=setInterval(() => {
        const currenTime = Date.now()
        const deltaTime = timeSelected-currenTime;
        const convertedTime =this.convertMs(deltaTime);
        this.onTick(convertedTime);
        if (deltaTime <= 0) { this.stop(); }
        // console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
    }, 1000);
    }

stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const convertedTime =this.convertMs(0);
        this.onTick(convertedTime);
    }

convertMs(ms) {
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const days = addLeadingZero(Math.floor(ms / day));
const hours = addLeadingZero(Math.floor((ms % day) / hour));
const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
return { days, hours, minutes, seconds };
};

}
const timer = new Timer(
    {onTick:updateClockface}
);

refs.startBtn.addEventListener('click', () => { timer.start(); });
// Напиши функцию addLeadingZero(value),которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.
function addLeadingZero(value){ return String(value).padStart(2, '0') };

function updateClockface({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}


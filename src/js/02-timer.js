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
        }
const timer = {
    start() {
        const startTime = Date.now();
        // время на момент вызова функции
        setInterval(() => {
            const currenTime = Date.now()
            console.log(currenTime);
        // выводим разницу между текущим и стартовым временем
            const deltaTime = currenTime - startTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
        }, 1000);
        }
    }
timer.start();
// Напиши функцию addLeadingZero(value),которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.
function addLeadingZero(value){ return String(value).padStart(2, '0') };
function convertMs(ms) {
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
const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
console.log(selectedDates[0]);
},
};
const flatpickr = flatpickr(refs.inputClock, options);
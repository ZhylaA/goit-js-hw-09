
// Задание 1 - переключатель цветов
// Выполняй это задание в файлах 01-color-switcher.html и 01-color-switcher.js. Посмотри демо видео работы переключателя.
// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. 
// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна(disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getDate(): ", date.getDate());

// Возвращает день недели от 0 до 6
console.log("getDay(): ", date.getDay());

// Возвращает месяц от 0 до 11
console.log("getMonth(): ", date.getMonth());

// Возвращает год из 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Возвращает час
console.log("getHours(): ", date.getHours());

// Возвращает минуты
console.log("getMinutes(): ", date.getMinutes());

// Возвращает секунды
console.log("getSeconds(): ", date.getSeconds());

// Возвращает миллисекунды
console.log("getMilliseconds(): ", date.getMilliseconds());
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBgd = document.querySelector('body');
let timerId = null;

startBtn.addEventListener("click", startClick);
// при нажатии на кнопку старт меняет цвет боди 1з в секунду
function startClick() {
    timerId = setInterval(() => {
        bodyBgd.style.backgroundColor = getRandomHexColor()
    }, 1000);
// startBtn.setAttribute('disabled', 'true');
// stopBtn.setAttribute('disabled', 'false');

startBtn.disabled = true;
stopBtn.disabled = false;
};
stopBtn.addEventListener("click", stopClick);
function stopClick() {
    // останавливает
    clearInterval(timerId);

    // startBtn.removeAttribute('disabled');
    // stopBtn.setAttribute('disabled', 'false');
startBtn.disabled = false;
stopBtn.disabled = true;
};
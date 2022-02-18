import Notiflix from 'notiflix';

// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах,
//   шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.
const form = document.querySelector('.form');
const button = document.querySelector('button');
let delay = document.querySelector('input[name="delay"]');
let step = document.querySelector('input[name="step"]');
let amount = document.querySelector('input[name="amount"]');
form.addEventListener('submit', createPromise);
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
//   Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз,
//   сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) 
//     и задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
// Дополни код функции createPromise так, чтобы она возвращала один промис,
//   который выполянется или отклоняется через delay времени.Значением промиса должен быть объект,
//   в котором будут свойства position и delay со значениями одноименных параметров.
//     Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// Библиотека уведомлений
// ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix
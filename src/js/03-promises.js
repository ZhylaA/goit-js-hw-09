import Notiflix from 'notiflix';

// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах,
//   шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.
const form = document.querySelector('.form');
const button = document.querySelector('button');
let delay = document.querySelector('input[name="delay"]');
let step = document.querySelector('input[name="step"]');
let amount = document.querySelector('input[name="amount"]');

// Дополни код функции createPromise так, чтобы она возвращала один промис,
//   который выполянется или отклоняется через delay времени.Значением промиса должен быть объект,
//   в котором будут свойства position и delay со значениями одноименных параметров.
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve
          ({ position, delay });
      } else { reject({ position, delay }); }
    }, delay);
  });
  //   Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
  // Библиотека уведомлений
  // ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
  // Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix
  promise.then(({ position, delay }) => { Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
//   Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз,
//   сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) 
//     и задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
form.addEventListener('submit', onClickSubmit);
function onClickSubmit(ev) {
  ev.preventDefault();  
  
  delay = Number(delay.value);

  step = Number(step.value);

  amount = Number(amount.value);
  console.log(delay,step,amount);
  for (let i = 0; i < amount; i += 1) {
    const stepDelay = delay + i * step;
    createPromise(i + 1, stepDelay);
}
}



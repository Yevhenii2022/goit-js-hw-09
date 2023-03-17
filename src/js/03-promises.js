import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleFormElSubmit);

function handleFormElSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = formEl.elements;

  const position = Number(amount.value);

  for (let i = 0; i < position; i += 1) {
    const delayCount = Number(delay.value) + Number(step.value) * i;

    createPromise(i + 1, delayCount)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

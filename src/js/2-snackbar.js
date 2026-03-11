import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(e.currentTarget.elements.delay.value);
  const state = e.currentTarget.elements.state.value;

  function createPromise(delay, state) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          res({ delay });
        } else {
          rej({ delay });
        }
      }, delay);
    });
    return promise;
  }

  createPromise(delay, state)
    .then(delay => {
      iziToast.show({
        title: 'Ok',
        message: `✅ Fulfilled promise in ${delay}ms`,
        color: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        color: '#ef4040',
        position: 'topRight',
      });
    });
});

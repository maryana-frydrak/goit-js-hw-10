import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const delayInput = form.elements.delay;
    const stateInput = form.elements.state;

    const delay = Number(e.currentTarget.elements.delay.value);
    const state = e.currentTarget.elements.state.value;
})

function createPromise(delay, state) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                res({ delay });
            } else {
                rej({ delay });
            }
        }, delay);
    });
    return promise;
}

createPromise(delay, state)
    .then(({ delay, value }) => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(({ delay, value }) => {
        console.log(`❌ Rejected promise in ${delay}ms`);
    });
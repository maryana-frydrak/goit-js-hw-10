import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

function createPromise(value, delay, isPositive) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (isPositive) {
                res(value);
                console.log(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                rej(value);
                console.log(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
    return promise;
}
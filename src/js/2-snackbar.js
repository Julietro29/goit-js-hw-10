// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

const delayInput = form.querySelector('[name="delay"]');
const stateInputs = form.querySelectorAll('[name="state"]');
const selectedState = [...stateInputs].find(input => input.checked);

const delay = parseInt(delayInput.value, 10);

const promise = new Promise((resolve, reject) => {
    if (selectedState.value === 'fulfilled') {
    setTimeout(() => resolve(`✅ Fulfilled promise in ${delay}ms`), delay);
    } else {
    setTimeout(() => reject(`❌ Rejected promise in ${delay}ms`), delay);
    }
    });

promise.then(
    result => {
    iziToast.success({
    icon: null,
    position: 'topRight',
    message: result,
    messageColor: 'white',
    backgroundColor: '#59A10D',
    });
},
error => {
    iziToast.error({
    icon: null,
    position: 'topRight',
    message: error,
    messageColor: 'white',
    backgroundColor: '#EF4040',
    });
}
);
});
});

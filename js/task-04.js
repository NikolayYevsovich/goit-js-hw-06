const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtnEl.addEventListener('click', () => {
	valueEl.textContent = counterValue += 1
});

decrementBtnEl.addEventListener('click', () => {
	valueEl.textContent = counterValue -= 1
});
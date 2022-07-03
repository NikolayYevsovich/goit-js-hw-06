const inputEl = document.querySelector('#font-size-control');
const titleEl = document.querySelector('#text');

inputEl.addEventListener('input', fontSizeChanger)

function fontSizeChanger() {
	titleEl.style.fontSize = `${inputEl.value}px`;
};

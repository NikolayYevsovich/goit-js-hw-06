const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
	if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
	  inputEl.classList.remove('invalid');
      return inputEl.classList.add('valid');		
	}
	  inputEl.classList.remove('valid');
      return inputEl.classList.add('invalid');
};






const inputName = document.getElementById('name-input');
const spanName = document.getElementById('name-output');

inputName.addEventListener('input', e => {
  const inputValue = e.target.value.trim();

  !inputValue
    ? (spanName.textContent = 'Anonymus')
    : (spanName.textContent = inputValue);
});

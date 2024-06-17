function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('input'),
  createBtn = document.querySelector('button[data-create]'),
  destroyBtn = document.querySelector('button[data-destroy]'),
  boxesField = document.getElementById('boxes');

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let markup = '';

  for (let i = 1; i <= amount; i++) {
    markup += `<div class='box' style='width: ${width}px; height: ${height}px; background-image: linear-gradient(135deg, ${getRandomHexColor()}, transparent)'></div>`;
    width += 10;
    height += 10;
  }

  boxesField.innerHTML = markup;
}

createBtn.addEventListener('click', e => {
  const inputValue = inputNum.value;
  if (inputValue > 0 && inputValue <= 100) {
    createBoxes(inputValue);
  }
  inputNum.value = '';
});

function destroyBoxes() {
  boxesField.innerHTML = '';
}

destroyBtn.addEventListener('click', e => destroyBoxes());

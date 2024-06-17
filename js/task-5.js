function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', e => {
  const firstColorHex = getRandomHexColor();
  const secondColorHex = getRandomHexColor();

  document.body.style.backgroundImage = `linear-gradient(-45deg, ${firstColorHex} 25%, ${secondColorHex} 75%)`;
  colorValue.textContent = `${firstColorHex}, ${secondColorHex}`;
});

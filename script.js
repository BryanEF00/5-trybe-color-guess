const colorsToGuess = document.getElementById('color-options');

function generateColor() {
  /* Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */

  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `(${r},${g},${b})`;
}

function pickColor(e) {
  let pickedColor = e.target;
  let pickedColorBG = pickedColor.style.backgroundColor;
  let pickedColorCode = pickedColorBG.replace('rgb', '');

  if (pickedColorCode === colorRGB.innerText) {
    document.getElementById('answer').innerText = 'Acertou!';
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
}

function colorOptions() {
  for (let i = 0; i < 6; i += 1) {
    let color = document.createElement('div');
    color.classList.add('ball');
    color.style.backgroundColor = `rgb${generateColor()}`;

    colorsToGuess.appendChild(color);

    color.addEventListener('click', pickColor);
  }
  let initialText = document.createElement('p');
  initialText.innerText = 'Escolha uma cor';
  initialText.id = 'answer';

  colorsToGuess.appendChild(initialText);
}

colorOptions();

function randomColor() {
  let rng = parseInt(Math.random() * 6 + 1);
  let colorSelected =
    document.querySelector('#color-options').children[rng].style
      .backgroundColor;
  let colorSelectedCode = colorSelected.replace('rgb', '');

  return colorSelectedCode;
}

const colorRGB = document.getElementById('rgb-color');
colorRGB.innerText = randomColor();

const resetBtn = document.getElementById('reset-game');

function deleteGame() {
  for (let i = 1; i < 8; i += 1) {
    document.getElementById('color-options').children[1].remove();
  }
}

function newGame() {
  colorOptions();
  colorRGB.innerText = randomColor();
}

resetBtn.addEventListener('click', deleteGame);
resetBtn.addEventListener('click', newGame);

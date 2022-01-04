const balls = document.getElementsByClassName('ball');
const colorToGuess = document.getElementById('rgb-color');
const answerResult = document.getElementById('answer');
const resetGameBtn = document.getElementById('reset-game');
const colorOptions = document.getElementById('color-options');

const scoreBoard = document.getElementById('score');
let scoreNumber = 0;
scoreBoard.innerText = `Placar: ${scoreNumber}`;

/* Generate a random RGB color */
function generateColor() {
  /* Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */

  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);

  return `(${r},${g},${b})`;
}

/* Add backgroundColor to balls */
function addColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb${generateColor()}`;
  }
}

/* Choose one of the balls to be the color to guess */
function pickColor() {
  const randomNumber = parseInt(Math.random() * 6, 10);
  const colorCode = balls[randomNumber].style.backgroundColor;
  colorToGuess.innerText = colorCode.replace('rgb', '');
}

/* add Answer to a Click */
function guessColorAnswer(e) {
  const guessOptions = e.target;
  const guessOptionsBG = guessOptions.style.backgroundColor;
  const pickedColorCode = guessOptionsBG.replace('rgb', '');

  if (pickedColorCode === colorToGuess.innerText) {
    answerResult.innerText = 'Acertou!';
    scoreNumber += 3;
    scoreBoard.innerText = `Placar: ${scoreNumber}`;
  } else {
    answerResult.innerText = 'Errou! Tente novamente!';
  }
}
for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', guessColorAnswer);
}

/* Reset Game Button */
function resetGame() {
  /* remove */
  for (let i = 0; i < 6; i += 1) {
    balls[0].remove();
  }
  /* create */
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    colorOptions.appendChild(ball);
    ball.addEventListener('click', guessColorAnswer);
  }
  answerResult.innerText = 'Escolha uma cor';
}

function newGame() {
  addColor();
  pickColor();
}

resetGameBtn.addEventListener('click', resetGame);
resetGameBtn.addEventListener('click', newGame);

/* Loading Page Functions */
function loadedPage() {
  addColor();
  pickColor();
}

window.onload = loadedPage;

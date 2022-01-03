const corRGB = document.getElementById('rgb-color');
corRGB.innerText = generateColor();

const colorsToGuess = document.getElementById('color-options');

function generateColor() {
  /* Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */

  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `(${r},${g},${b})`;
}

function colorOptions() {
  for (let i = 0; i < 6; i += 1) {
    let color = document.createElement('div');
    color.classList.add('ball');
    color.style.backgroundColor = `rgb${generateColor()}`;

    colorsToGuess.appendChild(color);
  }
}

colorOptions();

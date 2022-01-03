let corRGB = document.getElementById('rgb-color');
corRGB.innerText = generateColor();

function generateColor() {
  /* Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */

  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `(${r},${g},${b})`;
}

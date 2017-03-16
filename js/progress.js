var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  halfW = canvas.width / 2,
  halfH = canvas.height / 2,
  range = document.getElementById('range'),
  radius = 85,
  bColor = '#38a86c';

ctx.lineWidth = 7;
ctx.lineCap = 'round';
ctx.textAlign = 'center';

ctx.translate(halfW, halfH);
ctx.rotate((-1 / 2) * Math.PI);
ctx.translate(-halfW, -halfH);

ctx.beginPath();
ctx.strokeStyle = '#ECEFF1';
ctx.arc(halfW, halfH, radius, 0, Math.PI * 2, false);
ctx.stroke();

function draw() {

  ctx.clearRect(0, 0, 400, 400);
  ctx.beginPath();
  ctx.strokeStyle = '#ECEFF1';
  ctx.arc(halfW, halfH, radius, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = bColor;
  ctx.arc(halfW, halfH, radius, 0, Math.PI * 2 * (range.value * 0.01), false);
  update();
  ctx.stroke();
}

function update(value) {

  ctx.save();
  ctx.translate(halfW, halfH);
  ctx.rotate((1 / 2) * Math.PI);
  ctx.translate(-halfW, -halfH);
  ctx.fillText(range.value + '%', halfW, halfH);
  ctx.restore();
}
setTimeout(draw, 10);
range.addEventListener('input', draw);

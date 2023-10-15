const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}
function draw() {
  background(255);

  noStroke();
  fill('salmon');
  // for (let a = 0; a < 10; a++) {
  //   rect(0, 0, 10, height);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a), (255 / stripeNum2) * b;
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      ellipse(x, y, 10);
    }
  }
}

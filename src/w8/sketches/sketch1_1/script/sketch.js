let dom;
function setup() {
  dom = Select('#hereGoesMyP5Sketch');
  console.log(dom);
  let canvas = crateCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}
function draw() {}

function windowResized() {
  console.log('리사이즈도됩니다');
  console.log(dom);
}

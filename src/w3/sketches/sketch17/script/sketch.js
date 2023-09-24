let x;
let y;
let xAdd = 5;
let yAdd = 3;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  x = width / 2;
  y = height / 2;
}
function draw() {
  background('white');
  x += xAdd;
  y += yAdd;

  if (x < 0){
    x += width
    else if (x >= width)
    x -= width
  }
  if (y < 0){
    y += height
    else if (y >= height)
    y -= height
  }
  ellipse(0, 0, 2 * radius);
}

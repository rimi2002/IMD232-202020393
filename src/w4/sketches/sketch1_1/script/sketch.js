let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('255');
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background('white');
  //   posX++;
  //   posX = posX + 1;
  //   posX += 1;
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
}

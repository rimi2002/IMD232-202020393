let Vehicle;
let mVec;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  vehicle = new Vehicle(width / 2, height / 2, 16, color(330, 100, 50));
  mVec = createVector;

  colorMode(RGB, 255, 255, 255);
  background(255);
}
function draw() {
  mVec.et(mouseX, mouse.Y);
  vehicle.update();
  background(255);
  vehicle.display();
}

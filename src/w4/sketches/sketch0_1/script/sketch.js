let moverA;
let moverB;
let gravity;
let wind;
let att;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  moverA = new Mover(width / 3, 30, 10);
  moverB = new Mover((2 * width) / 3, 30, 2);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
  att= ne Attractor(width/2, height/2,100)
}

function draw() {
  background(255);

  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverB.update();

  moverA.checkEdges();
  moverB.checkEdges();

  moverA.display();
  moverB.display();

  if (showVector) {
    moverA.displayVectors();
    moverB.displayVectors();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}


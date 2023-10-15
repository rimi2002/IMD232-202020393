let mover;
let attractor;
let showVector = false;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(255);

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
  if (showVector) {
    mover.displayVectors();
  }

  attractor.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  attractor.stopDragging();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

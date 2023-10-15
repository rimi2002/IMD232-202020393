let bodies = [];
const bodyNum = 30;
let G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    // if (showVector) {
    //   bodies[i].displayVectors();
    // }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    bodies = [];
    reset();
  }
}

function reset() {
  for (let i = 0; i < bodyNum; i++) {
    // const mass = random(16, 100);
    // const radius = sqrt(mass) * random(20, 50);
    // bodies[i] = new Body(random(width), random(height), mass, radius);
    bodies.push(new Body(random(width), random(height), random(0.1, 2)));
  }
}

// function keyPressed() {
//   if (key === 's' || key === 'S') {
//     showVector = !showVector;
//   }
// }

let pos;
let vel;
let acc;
let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  cv = createVector(random(width), random(height));
  mv = createVector();

  acc.mult(0.1);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
  console.log('velmag', vel.mag());
  console.log('accmag', acc.mag());
}

function draw() {
  background('white');
  update();
  checkEdges();
  display();
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());

  strokeWeight(2);
  stroke('cornflowerblue');
  line(pos.x, pos.y, acc.x, acc.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(pos.x, pos.y, mv.x, mv.y);
  mv.sub(cv);

  stroke('black');
  line(pos.x, pos.y, vel.x, vel.y);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}

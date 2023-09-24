let pos;
let vel;
let acc;
let mv;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  mv = createVector();
}

function draw() {
  background('white');
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);

  mv.x = mouseX;
  mv.y = mouseY;

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
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mv.x, mv.y);

  stroke('crimson');
  acc.sub(vel);
  line(pos.x, pos.y, 100 * (pos.x - vel.x), 100 * (pos.y - vel.y));

  stroke('cornflowerblue');
  let blueline = p5.Vector.sub(acc, vel);

  line(pos.x, pos.y, pos.x - 10 * blueline.x, pos.y - 10 * blueline.y);
}

//   acc.sub(vel);
//   translate(vel.x, vel.y);
//   stroke('cornflowerblue');
//   line(pos.x, pos.y, vel.x, vel.y);

//   mv = p5.Vector.sub(acc, vel);
//   stroke('crimson');
//   line(pos.x, pos.y, mv.x, mv.y);
// }

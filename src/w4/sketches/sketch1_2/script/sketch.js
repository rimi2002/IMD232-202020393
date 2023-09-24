let pos;
let vel;
let acc;
let radious = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('255');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log('pos', pos);
  console.log('vel', vel);
  ellipse(pos.x, pos.y, 2 * radious);
}

function draw() {
  background('white');
  update();
  infiniteEdge();

  //   posX++;
  //   posX = posX + 1;
  // posX += 1;

  //   acc = p5.Vector.random2D();
  //   acc.mult(2);
  //   vel.add(acc);
  //   vel.limit(5);
  //   pos.add(vel);

  //   if (pos.x < 0) {
  //     vel.x * -1;
  //   } else if (pos.x > width) {
  //     vel.x * -1;
  //   }
  //   if (pos.x - radious < 0 || pos.x + radious > width) {
  //     vel.x *= -1;
  //   }
  //   if (pos.y - radious < 0 || pos.y + radious > height) {
  //     vel.y *= -1;
  //   }

  //   if (pos.x < 0) {
  //     pos.x = width;
  //   } else if (pos.x > width) {
  //     pos.x = 0;
  //   }
  //   if (pos.y < 0) {
  //     pos.y = height;
  //   } else if (pos.y > height) {
  //     pos.y = 0;
  //   }

  function update() {
    acc = p5.Vector.random2D();
    acc.mult(2);
    vel.add(acc);
    vel.limit(5);
    pos.add(vel);
  }

  function infiniteEdge() {
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
  ellipse(pos.x, pos.x, 2 * radious);
}

let emitter;
let gravity;
function setup() {
  setcanvascontainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createvector(0, 0.1);
  background(360, 0, 100);
  for (let n = 0; n < 100; n++) emitter.createParticle();
}

function draw() {
  background('white');
  console.log('현재 파티클 개수: ' + particles.length);
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.applyForce(gravity);
    p.update();
    p.display();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < maxParticles; i++) {
    let hue = random(360);
    let angle = random(TWO_PI); // 무작위 방향을 선택
    let magnitude = 3;
    let vx = cos(angle) * magnitude;
    let vy = sin(angle) * magnitude;
    let p = new Particle(mouseX, mouseY, hue, vx, vy, random(360, 100, 100));
    particles.push(p);
  }
}

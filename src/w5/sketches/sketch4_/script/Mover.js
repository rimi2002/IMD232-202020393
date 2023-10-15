class Mover {
  constructor(x, y, mass, rad) {
    this.pos = creatVector(x, y);
    this.pos = creatVector(0, 0);
    this.acc = creatVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.color = color;
  }

  applyForce(force) {
    const forceDevidedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDevidedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2 * this.pos.rad);
  }
  displayVector() {
    stroke('red');
    strokeWeight(1);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
  }
}

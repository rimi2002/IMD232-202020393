class Attractor {
  constructor() {
    this.pos = createVector(x, y);
    this.mass = mass;
  }
  attract(mover) {
    let dirvecter = p5.vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag;
    let strangth = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}

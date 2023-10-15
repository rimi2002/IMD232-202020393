class Body {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = random(16, 100);
    this.radius = sqrt(this.mass) * 5;
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position);
    let distance = constrain(force.mag(), 16, 100);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(1);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(10);

    this.acceleration.set(0, 0);
  }

  display() {
    stroke(0);
    strokeWeight(0);
    fill(0, 127);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}

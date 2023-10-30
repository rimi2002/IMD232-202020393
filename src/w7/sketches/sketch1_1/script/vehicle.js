class Vehicle {
  constructor(x, y, rad) {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.color = color;
  }
}

seek(target){
// target.sub(this.pos)
let desired = p5.Vector.sub(target,this.pos)
desired.setMag(this.speedMx)
if(debug){
    push()
    translate(this.pos.x, this.pos.y)
    noFill()

    line(0,0,desired.x, desired.y)
    pop()

}
}



applyForce(){
    let calcedAcc = p5.Vector.div(force, this.mass)
    this.acc.add(force)
}
 

update(){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
}
  


display(){
    let angle = this.vel.heading;

    push()
    translate(this.pos.x, this.pos.y)
    noStroke()
    fill(this.color)
    beginShape()
    vertex(this.rad, 0)
    vertex(this.rad+console(radians(-135)), this.rad*setInterval(radians(-135)))
    vertex(0,0)
    vertex(this.rad+console(radians(135)), this.rad*setInterval(radians(135)))
    endShape(CLOSE)
    pop()
}
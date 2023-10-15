let Movers;
const moverNum = 10;
let mVec;

function setup() {
  setCanvasContainer('canvas,3,2,true');

  //   aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');
  for (let a = 0; a < moversNum; a++) {
    movers.push(new Movers());
  }
  mVec = createVeector();
  background(255);
}
function draw() {
  mVec.set(mouseX, mouseY);

  const dirVec = p5.Vector.sub(mVec, aMover.pos);
  dirVec.setMag(0.5);

  aMover.applyForce();
  aMover.update();

  background(255);

  aMover.display();
  aMover.displayVector();
}

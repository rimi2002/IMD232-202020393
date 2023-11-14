const CanWidth = 800;
const CanHeight = 600;

const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

Common.setDecomp(decomp);

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();
Runner.run(runner, engine);
const walls = [];

let group;
let ropeA;
let ropeB;
let ropeC;

let mouse;

function setup() {
  setCanvasContainer('canvas', CanHeight, CanHeight, true);

  const concave1 = (vertices = [
    { x: -37, y: 0 },
    { x: -30, y: -28 },
    { x: 18, y: -16 },
    { x: 5, y: 2 },
    { x: 2, y: 24 },
    { x: -14, y: 23 },
  ]);
  concave2 = vertices = [
    { x: 40, y: 0 },
    { x: 10, y: 12 },
    { x: 20, y: 25 },
    { x: -10, y: 16 },
    { x: 0, y: 10 },
    { x: -10, y: 0 },
  ];
  concave3 = vertices = [
    { x: 10, y: 0 },
    { x: 10, y: 30 },
    { x: 40, y: 30 },
    { x: 40, y: 30 },
    { x: 10, y: 30 },
    { x: 10, y: 40 },
    { x: 0, y: 45 },
  ];

  const Body = decomp.quickDecomp(concave1);
  const Body2 = decomp.quickDecomp(concave2);
  const Body3 = decomp.quickDecomp(concave3);

  group = Matter.Body.nextGroup(true);

  ropeA = Matter.Composites.stack(100, 50, 7, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, concave1, {
      collisionFilter: { group: group },
    });
  });
  Matter.Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeA,
    Matter.Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeB = Matter.Composites.stack(350, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x - 20, y, concave2, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeB,
    Matter.Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeC = Matter.Composites.stack(600, 50, 16, 1, 10, 12, function (x, y) {
    return Matter.Bodies.fromVertices(x - 20, y, concave3, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Matter.Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Matter.Composite.add(
    ropeC,
    Matter.Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Matter.Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Matter.Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / CanWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('#fffaee');
  Runner.run(runner, engine);

  console.log('group', group);
  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
  console.log('ropeC', ropeC);
  console.log('Bodies', Bodies);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / CanWidth;

  background('#fffaee');

  stroke('#ffea94');
  fill('#ffea94');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / CanWidth) * width,
          (eachVertex.y / CanHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });

  stroke('#fcb3a2');
  fill('#fcb3a2');
  ropeB.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / CanWidth) * width,
          (eachVertex.y / CanHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });

  stroke('#dfc5ef');
  fill('#dfc5ef');
  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / CanWidth) * width,
          (eachVertex.y / CanHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
  console.log('length', ropeC.bodies[1].parts.length); //4
}

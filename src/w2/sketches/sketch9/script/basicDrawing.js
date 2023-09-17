function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  //루프로 인해 아래서 적용된 설정이 타고 넘어오는 것을 초기화
  rectMode(CENTER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  rect(100, 100, 50, 50);
  ellipse(100, 100, 50, 50);
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 127, 0);
  ellipse(100, 200, 50);
  fill('#00ee40');
  circle(200, 200, 50);
  colorMode(HSL);
  fill(240, 100, 50);
  rect(300, 200, 50);
  noStroke();
  square(400, 200, 50);

  rect(100, 300, 50, 50, 5);
  rect(200, 300, 50, 50, 5, 10, 15, 20);

  stroke(0);
  line(100, 400, 150, 450);

  stroke('royalblue');
  line(200, 400, 300, 400);
  stroke('salmon');
  strokeWeight(5);
  line(250, 400, 250, 450);
  stroke('slateBlue');
  strokeWeight(10);
  line(250, 450, 200, 450);

  stroke(50, 100, 10);
  strokeWeight(2);
  Point(300, 400);
  Point(310, 400);
  Point(320, 400);
  Point(330, 400);
  Point(340, 400);
  Point(350, 400);
  strokeWeight(3);
  Point(300, 410);
  Point(310, 410);
  Point(320, 410);
  Point(330, 410);
  Point(340, 410);
  Point(350, 410);
  strokeWeight(4);
  Point(300, 420);
  Point(310, 420);
  Point(320, 420);
  Point(330, 420);
  Point(340, 420);
  Point(350, 420);
  strokeWeight(5);
  Point(300, 430);
  Point(310, 430);
  Point(320, 430);
  Point(330, 430);
  Point(340, 430);
  Point(350, 430);
}

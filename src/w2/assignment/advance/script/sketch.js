function setup() {
  setCanvasContainer('canvas-goes-here', 600, 400, true);
  background('white');
}

function draw() {
  background('#fffbe9');
  colorMode(RGB);

  //바닥
  fill('#d8d0bf');
  rect(300, 385, 600, 30);
  //바닥선
  stroke(191, 184, 165);
  strokeWeight(12);
  line(600, 370, 0, 370);
  //전등줄
  stroke('#685f48');
  strokeWeight(4);
  line(125, 0, 125, 100);

  noStroke(0);
  rectMode(CENTER);
  //전등
  colorMode(HSB);
  fill(43, 32, 100, 0.4);
  ellipse(125, 120, 60);
  fill(43, 32, 100, 0.4);
  ellipse(125, 120, 50);
  fill(43, 32, 100, 0.4);
  ellipse(125, 120, 40);
  colorMode(RGB);
  fill('#ffe088');
  ellipse(125, 120, 30);
  //전등커버
  fill('#a09070');
  rect(125, 100, 70, 40, 50, 50, 0, 0);
  //책상 상판
  fill('#59432d');
  rect(130, 248, 260, 20, 0, 8, 8, 0);
  fill('#3a312a');
  rect(120, 262, 258, 10, 0, 0, 7, 0);
  //책상 다리
  fill('#59432d');
  rect(230, 312, 16, 90);
  fill('#3a312a');
  rect(230, 360, 16, 8);
  //의자 상판_1
  fill(112, 84, 56);
  rect(90, 300, 180, 14, 0, 4, 4, 0);
  fill('#514439');
  rect(84, 310, 176, 6, 0, 0, 5, 0);
  //의자 다리_1_우
  fill(112, 84, 56);
  rect(154, 337, 12, 48);
  fill('#514439');
  rect(154, 363, 12, 5);
  //의자 다리_1_좌
  fill(112, 84, 56);
  rect(10, 337, 12, 48);
  fill('#514439');
  rect(10, 363, 12, 5);
  //의자 다리_1_하단
  fill(112, 84, 56);
  rect(84, 334, 150, 10);
  //의자 상판_2
  fill(112, 84, 56);
  rect(240, 300, 98, 14, 4);
  fill('#514439');
  rect(240, 310, 90, 6, 0, 0, 5, 5);
  //의자 다리_2_등받이
  fill(112, 84, 56);
  rect(274, 260, 15, 80, 4, 4, 0, 0);
  //의자 다리_2_우
  fill(112, 84, 56);
  rect(206, 337, 12, 48);
  fill('#514439');
  rect(206, 363, 12, 5);
  //의자 다리_2_좌
  fill(112, 84, 56);
  rect(274, 337, 12, 48);
  fill('#514439');
  rect(274, 363, 12, 5);
  //의자 다리_2_하단
  fill(112, 84, 56);
  rect(244, 334, 70, 10);
  //음식_1
  fill('#c3dd85');
  ellipse(94, 212, 40);
  fill('#c3dd85');
  ellipse(120, 210, 50);
  //그릇_1
  fill('#ffe1b6');
  rect(110, 223, 90, 30, 0, 0, 20, 20);
  fill('#ffd18f');
  rect(110, 208, 96, 8, 0, 8, 8, 8);
  //음식_2
  fill('#ffc866');
  ellipse(138, 216, 32);
  fill('#ffe088');
  ellipse(162, 215, 24);
  //그릇_2
  fill('#fcc6bb');
  rect(148, 228, 60, 20, 0, 0, 30, 30);
  fill('#ffb3a1');
  rect(148, 218, 66, 6, 0, 8, 8, 8);
  //둥근 창문_1
  stroke('#775b40');
  strokeWeight(7);
  fill('#ccf2f1');
  rect(390, 140, 100, 145, 100, 100, 2, 2);
  //둥근 창문_2
  stroke('#775b40');
  strokeWeight(7);
  fill('#ccf2f1');
  rect(520, 140, 100, 145, 100, 100, 2, 2);
  //구름_1
  noStroke(0);
  fill('#ffffff');
  ellipse(381, 130, 34);
  ellipse(405, 140, 28);
  ellipse(364, 144, 28);
  ellipse(382, 146, 40);
  ellipse(402, 152, 22);
  //구름_2
  ellipse(521, 110, 34);
  ellipse(545, 120, 28);
  ellipse(504, 124, 28);
  ellipse(522, 126, 40);
  ellipse(542, 132, 22);
  //초원_1
  fill('#c1db71');
  rect(390, 199, 93, 20);
  //초원_2
  fill('#c1db71');
  rect(520, 199, 93, 20);
  //둥근 창문_1 창살
  stroke('#775b40');
  strokeWeight(6);
  line(340, 118, 440, 118);
  line(340, 168, 440, 168);
  line(390, 70, 390, 210);
  //둥근 창문_2 창살
  strokeWeight(6);
  line(470, 118, 570, 118);
  line(470, 168, 570, 168);
  line(520, 70, 520, 210);
  noStroke(0);
  //소파_1_등받이
  fill('#e5d0ae');
  rect(455, 280, 220, 70, 50, 50, 0, 0);
  fill('#edd7b2');
  rect(455, 340, 220, 18, 50, 50, 0, 0);
  //소파_1_팔걸이
  rect(334, 314, 34, 70, 20, 20, 0, 10);
  rect(576, 314, 34, 70, 20, 20, 10, 0);
  //소파_1_엉덩이
  fill('#f9edd7');
  rect(455, 320, 220, 30, 50, 50, 5, 5);
  //소파_1_단추
  fill('#dbc39c');
  ellipse(400, 280, 10);
  ellipse(455, 280, 10);
  ellipse(510, 280, 10);
  //소파_1_다리
  fill('#d8bb91');
  rect(354, 356, 16, 16);
  rect(554, 356, 16, 16);
}

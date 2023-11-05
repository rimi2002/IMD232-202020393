// 변수 선언
let traffic; // 트래픽 물체를 저장하는 변수
let infiniteOffset = 80; // 무한 반복을 위한 오프셋

// setup() 함수
// 캔버스 크기를 3,2비율로 설정
function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // 색상 모드를 HSL로 설정
  colorMode(HSL, 360, 100, 100, 100);

  // 배경색을 화이트로 설정
  background('white');

  // 트래픽 물체 생성
  traffic = new Traffic();

  // 10개의 물체 생성(무작위 위치)
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

// draw() 함수 (스케치의 각 프레임을 그리는 함수)
// 배경색 설정
function draw() {
  background('white');

  // 트래픽 업데이트
  traffic.run();
}

// mouseDragged() 함수 (마우스가 드래그될 떄 호출되는 함수)
// 마우스 위치에 물체 추가
function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}

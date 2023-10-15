let aVariable;
let anArray = [30, 60, 90];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log(aVariable);

  background(255);

  //   line(10, 10, 10, height - 10);

  // for(begin; condition; step)
  // for(초기값; 조건; 매 시행의 끝에 하는 일){
  // 조건이 부합하는 동일한 일
  //}
  //for(let 변수 이름 = 초기값; 변수 이름 < 값; 매시행의 끝에 하는 일)

  for (let i = 0; i < innerWidth; i += 10) {
    line(i + 10, 10, i + 10, height - 10);
  }
}
function draw() {}

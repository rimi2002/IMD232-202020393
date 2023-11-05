let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = Select('#hereGoesMyP5Sketch');
  //   console.log('P5 select', dom);
  //   console.log('P5 select', dom.width);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('Queryselector', htmlDom);
  //   console.log('Queryselector', htmlDom.clientWidth);
  let canvas = crateCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}
function draw() {}

function windowResized() {
  console.log('리사이즈도됩니다');
  //   dom = select('#hereGoesMyP5Sketch');
  //   console.log(dom);
  //   console.log('Queryselector', htmlDom);
}
//querySelect 방식이 더편할지도,,,

if (htmlDom.clientWidth < canvasW) {
  //   console.log('너무 작아서 잘림');
  resizeCanvas(htmlDom.clientWidth, (htmlDom.clientWidth * canvasH) / canvasW);
  background('black');
} else if (width !== canvasW) {
  resizeCanvas(canvasW, cnavasH);
  background('black');
}

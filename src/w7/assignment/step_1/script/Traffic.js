class Traffic {
  constructor() {
    // 물체 배열을 초기화
    this.vehicles = [];
  }

  run() {
    //물체에 대해 다음을 수행
    this.vehicles.forEach((eachVehicle) => {
      // 주변 물체으로부터 멀어지려는 힘을 계산
      const separate = eachVehicle.separate(this.vehicles);
      // 주변 물체으로부터 멀어지려는 힘의 크기를 조정
      separate.mult(1);
      // 주변 물체으로부터 멀어지려는 힘을 객체에 적용
      eachVehicle.applyForce(separate);

      // 주변 물체와 같은 방향으로 움직이려는 힘을 계산
      const align = eachVehicle.align(this.vehicles);
      // 주변 물체와 같은 방향으로 움직이려는 힘의 크기를 조정
      align.mult(0.5);
      // 주변 물체와 같은 방향으로 움직이려는 힘을 객체에 적용
      eachVehicle.applyForce(align);

      // 주변 물체과 함께 움직이려는 힘을 계산
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // 주변 물체과 함께 움직이려는 힘의 크기를 조정
      cohesion.mult(0.5);
      // 주변 물체과 함께 움직이려는 힘을 물체에 적용
      eachVehicle.applyForce(cohesion);

      // 물체의 위치와 속도를 업데이트
      eachVehicle.update();

      // 물체이 화면 밖으로 나가지 않도록 함
      eachVehicle.borderInfinite();

      // 물체을 화면에 그림
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    // 물체의 질량을 1로 설정
    const mass = 1;

    // 새로운 물체을 생성하여 교통 시뮬레이션의 물체 배열에 추가
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}

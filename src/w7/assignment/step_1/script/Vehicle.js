// Vehicle  Class
class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 초기 위치를 나타내는 벡터를 생성
    // \초기 위치(x, y), 질량(mass), 반경(rad), 최대 속도(speedMx), 최대 힘(forceMx), 색상(color)을 매개변수로 받아와서 물체을 초기화
    this.pos = createVector(x, y);
    // 무작위 방향으로 초기 속도 벡터를 생성
    this.vel = p5.Vector.random2D();
    // 가속도 벡터 생성
    this.acc = createVector();
    //  물체의 질량 지정
    this.mass = mass;
    //  물체의 반경 지정
    this.rad = rad;
    // 최대 속도 지정
    this.speedMx = speedMx;
    // 최대 힘 지정
    this.forceMx = forceMx;
    // 물체 범위 반경 설정
    this.neighborhooodRad = 50;
    // 물체 색상 지정
    this.color = color;
  }

  // 다른 물체과의 인접성을 유지하는 행동을 구현한 함수인 'cohesion' 정의
  cohesion(others) {
    // 관련 물체 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 물체에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 물체과 다른 물체 사이의 거리 제곱을 계산
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 범위 이내라면 조절력 벡터에 다른 물체의 위치를 더함
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    // 주위 물체가 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      //cnt 변수가 0보다 크다면 아래의 계산을 수행
      steer.div(cnt); // steer 벡터를 cnt로 나눠서 (평균을 구함) 방향을 조절.
      steer.sub(this.pos); // steer 벡터에서 현재 물체의 위치 벡터 this.pos를 뺀 결과를 steer 벡터에 할당
      steer.setMag(this.speedMx); //steer 벡터의 크기를 this.speedMx로 설정
      steer.sub(this.vel); // steer 벡터에서 현재 물체의 속도 벡터를 뼤고 새로운 방향을 계산
      steer.limit(this.forceMx); // steer 벡터의 크기를 this.forceMx로 제한
    }
    return steer; //계산된 steer 벡터를 반환
  }

  // 다른 물체과의 일치된 방향을 유지하는 행동을 구현한 함수인 align을 정의
  align(others) {
    // 관련 물체 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 물체에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 물체과 다른 물체 사이의 거리 제곱을 계산
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 범위 이내라면 조절력 벡터에 다른 물체의 속도를 더한다
        steer.add(each.vel);
        cnt++;
      }
    });
    // 주위 물체가 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 다른 물체과의 격리를 유지하는 행동을 구현한 함수인 separate을 정의
  separate(others) {
    // 관련 물체 수와 조절력 벡터를 초기화
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 물체에 대해 반복
    others.forEach((each) => {
      if (each !== this) {
        // 현재 물체과 다른 물체 사이의 거리를 계산
        const dist = this.pos.dist(each.pos);
        // 만약 거리가 0보다 크고 두 물체의 반경 합보다 작다면 조절력을 추가
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리가 0보다 크고 두 물체의 반지름 합보다 작은 경우
          const distNormal = dist / (this.rad + each.rad);
          // 거리를 정규화하여 다른 물체로 향하는 벡터 계산
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          // 분리 벡터에 더함
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    // 주위 물체가 존재하면 조절력 벡터를 계산하고 반환
    if (cnt > 0) {
      // 평균 분리 벡터 계산
      steer.div(cnt);
      // 최대 속도로 설정
      steer.setMag(this.speedMx);
      // 현재 속도에서 분리 벡터를 뺌
      steer.sub(this.vel);
      // 최대 힘으로 제한
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 힘을 물체에 적용하는 함수를 정의
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  // 물체의 상태를 업데이트하는 함수를 정의
  update() {
    this.vel.add(this.acc); //현재 물체의 속도(this.vel)에 가속도(this.acc)를 더함
    this.vel.limit(this.speedMx); //물체의 속도를 최대 허용 속도(this.speedMx)로 제한
    this.pos.add(this.vel); //현재 물체의 위치(this.pos)에 속도(this.vel)를 더하여 물체를 이동
    this.acc.mult(0); //가속도(this.acc)를 0으로 재설정
  }

  // 물체이 화면 경계를 벗어나지 않도록 하는 함수를 정의
  borderInfinite() {
    // 물체가 화면 밖으로 나가지 않도록 함.
    if (this.pos.x < -infiniteOffset) {
      // 물체의 위치 벡터의 x값을 화면의 너비 + infiniteOffset로 설정
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      // 물체의 위치 벡터의 x값을 -infiniteOffset로 설정
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      // 물체의 위치 벡터의 y값을 화면의 높이 + infiniteOffset로 설정
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      // 물체의 위치 벡터의 y값을 -infiniteOffset로 설정
      this.pos.y = -infiniteOffset;
    }
  }

  // 물체을 화면에 그리는 함수를 정의
  display() {
    // 현재 좌표계를 저장하고  물체의 위치로 이동
    push();
    translate(this.pos.x, this.pos.y);
    //  물체의 방향으로 회전
    rotate(this.vel.heading());
    //  선없이 그리도록 설정
    noStroke();
    // 물체 색상 채우기
    fill(this.color);
    // 물체 그리기 시작
    beginShape();
    // 물체에 꼭짓점 추가
    vertex(this.rad, 0); //오른쪽 위 꼭짓점
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0); //꼭지 중심점
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // 도형 그리기 끝
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad); //물체 반지름
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); // 그림 그리기 팝
  }
}

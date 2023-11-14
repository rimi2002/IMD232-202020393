class Cell {
  constructor(x, y, w, h, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.nextState = state;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    this.friends = [
      //   cellArray[this.idx - colNum - 1], //왼위
      //   cellArray[this.idx - colNum], //중위
      //   cellArray[this.idx - colNum + 1], //오위
      //   cellArray[this.idx + 1], //오
      //   cellArray[this.idx + colNum + 1], //오아
      //   cellArray[this.idx + colNum], //중아
      //   cellArray[this.idx + colNum-1], //왼아
      //   cellArray[this.idx - 1], //왼
      this.idx - colNum - 1, //왼위
      this.idx - colNum, //중위
      this.idx - colNum + 1, //오위
      this.idx + 1, //오
      this.idx + colNum + 1, //오아
      this.idx + colNum, //중아
      this.idx + colNum - 1, //왼아
      this.idx - 1, //왼
      //현재 인덱스 위치: idx = totalcolNum*row+col
    ];
    const myCol = this.idx % colNum;
    const myRow = floor(this.idx / colNum);

    //왼쪽 귀퉁이
    if (myCol === 0) {
      idxList[0] = -1;
      idxList[7] = -1;
      idxList[6] = -1;
    }
    //오른쪽 귀퉁이
    else if (myCol === colNum - 1) {
      idxList[2] = -1;
      idxList[3] = -1;
      idxList[4] = -1;
    }
    //왼쪽 귀퉁이
    if (myRow === 0) {
      idxList[0] = -1;
      idxList[1] = -1;
      idxList[2] = -1;
    }
    //오른쪽 귀퉁이
    else if (myRow === rowNum - 1) {
      idxList[4] = -1;
      idxList[5] = -1;
      idxList[6] = -1;
    }

    this.idx.List.forEach((eacjIdx) => {
      this.friends.push(cells[eachIdx]);
    });
  }

  calcNextState() {
    let cnt = 0;
    this.friends.forEach((eachFriends) => {
      if (eachFriends.state) {
        cnt++;
      }
    });

    if (this.state) {
      if (cnt < 2 || cnt > 3) {
        this.nextState = false;
      } else {
        this.nextState = this.state;
      }
    } else {
      if (cnt === 3) {
        this.nextState = true;
      } else {
        this.nextState = this.state;
      }
    }
  }

  updateState() {
    this.state;
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

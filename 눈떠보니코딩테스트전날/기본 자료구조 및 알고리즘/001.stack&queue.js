// 1. 스택(stack)과 큐(Queue)

class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
    // this.arr[this.arr.length] = data;
  }

  // default pop
  //   pop(data) {
  //     this.arr.pop();
  //     // this.arr.length = this.arr.length - 1;
  //   }
  // 개발하다 보면 pop의 아규먼트로 data가 아니라 index가 들어가게해서 원하는 index의 data를 제거하는 식으로
  // 자료구조의 기능을 커스텀해서 개발해야되는 경우도 있다.
  // 커스터한 pop(index) {...}
  pop(index = this.arr.length - 1) {
    // case1. index가 입력이 안되었을 때
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }
    // case2. index가 입력이 되었을 때, 이렇게 쓰면 this.arr에 반영되지는 않는다.
    let result = this.arr.splice(index, 1);
    // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)];   // splice를 쓰면 더 간단하다.
    return result;
  }

  empty() {
    if (this.arr.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  top() {
    try {
      return this.arr[this.arr.length - 1];
    } catch (error) {
      return undefined;
    }
  }

  bottom() {
    try {
      return this.arr[0];
    } catch (error) {
      return undefined;
    }
  }

  // ※ top과 bottom은 empty 상황에 대한 처리가 필요하다.
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);

console.log(s.empty());
console.log(s.top());
console.log(s.bottom());

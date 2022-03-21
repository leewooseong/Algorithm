// 2. 연결리스트(linked-list)
//    - 연결리스투, 메모리 효율을 위해 사용되는 경우가 많다.
//    - js에서는 그다지 메모리 효율이 좋지 못함
//    - 알고리즘 시각화: https://visualgo.net/ko

// single-linked-list
// - 최소한 메모리 공간이 2개가 필요(위키피디아 링크드리스트 그림 참고)
// double-linked-list
// - 최소한 메모리 공간이 3개가 필요

// object로 나타내는 linked-list
const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data; // Node가 저장하고 있는 data의 값을 저장하는 변수
    this.next = null; // Node가 저장하고 있는 다음 Node의 위치를 저장하는 변수
    // this.pre = null
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init"); // LinkedList 인스턴스 생성시 처음 초기화 노드를 만들어주려 했던 것, 안만드는 알고리즘 강좌도 많지만 인스턴스 생성시 노드가 전혀 없는 것보다는 이해가 쉬워 넣어둔 것!
    this.head = init; // LinkedList의 처음(head)를 가리키는 변수
    this.tail = init; // LinkedList의 마지막(tail)를 가리키는 변수

    this.데이터수 = 0; // Node 수
  }

  // getter, setter 개념
  get fullData() {
    // return 'hello world'
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next; //init node 때문에

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }
    // JSON.parse()?
    return JSON.parse(`[${s.slice(0, -2)}]`); // [1, 2, 3, 10, 20, 30, ] -> 뒤에 , 와 ' '이 포함되어 있어서 slice로 자른 것
  }

  length() {
    return this.데이터수;
  }

  // 노드를 마지막 위치에 추가하는 메서드
  append(data) {
    let 새로운노드 = new Node(data);
    // 현재 마지막 node가 가리키는 pointer 값이 '새로운노드'를 가리키도록
    this.tail.next = 새로운노드;
    // 마지막 노드가 '새로운노드'로 변하였기 때문에 마지막 노드를 뜻하는 tail 변수의 값이 '새로운노드'로 변경됨
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }

  toString() {
    // 재귀적으로 데이터를 쌓아서 보여줄 것
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`;
      순회용현재노드 = 순회용현재노드.next;
    }
    return s.slice(0, -1);
  }

  insert(index, value) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(value);
    // 2줄의 코드
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;
    this.데이터수 += 1;
  }
}

// in console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
console.log(l.length());

console.log(l.toString());
console.log(l.fullData);

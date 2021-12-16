// 5. 트리(tree)와 그래프(graph)

// 5.1 트리
// 트리의 기본형태(value & child)
// value
// child - left
// child - right

const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};

tree.root.value;
5;
tree.root.left.value;
3;
tree.root.right.right.value;
9;

// object로 linked list와 tree로 만들 수 있는데
// 굳이 class로 만드는 이유는?

// 1. 확장성(예제를 통해 확인)
// 2. OOP(Object Oriented Programming) 철학에 맞기 때문에

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;

    // ※ 참고
    // this.child = []; // 이렇게 작성하면 이진트리말고 다양한 트리를 만들 수 있다.
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.NodeNumber = 0;
  }

  length() {
    return this.NodeNumber;
  }

  insert(data) {
    let newNode = new Node(data);
    let circuitPointer = this.root;

    while (circuitPointer) {
      if (data === circuitPointer.data) {
        // 중복된 값은 탈락!
        return;
      }
      if (data < circuitPointer.data) {
        // 들어온 데이터가 작으면 왼쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!circuitPointer.left) {
          circuitPointer.left = newNode;
          return;
        }
        circuitPointer = circuitPointer.left;
      }
      if (data > circuitPointer.data) {
        // 들어온 데이터가 작으면 오른쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!circuitPointer.right) {
          circuitPointer.right = newNode;
          return;
        }
        circuitPointer = circuitPointer.right;
      }
    }
    this.NodeNumber += 1;
  }

  // 깊이우선탐색, DFS(Depth First Search)
  // Stack 이용!
  DFS() {
    // result: 순회한 배열
    // stack: 순회할 배열?
    let result = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }

  // 너비우선탐색, BFS(Breadth First Search)
  // Queue 이용!
  BFS() {
    let result = [];
    let queue = [this.root];
    while (queue.length !== 0) {
      let current = queue.pop();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.value;
t.root.left.value;
t.root.right.right.value;
// 5
// 3
// 9

// ※ 위 예제는 데이터를 넣는 순서에 따라 트리가 바뀌게 된다.

// 레드블랙트리?
// 그래프

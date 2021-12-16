// 3. 정렬(sort) code snippet

// 3.1 선택 정렬(Select Sort):
// - 시간복잡도: O(n**2)
// - 입력 배열에서 제일 작은 것을 선택 -> 결과 배열(반환 배열)에 차례로 정렬

// ※ 선택 정렬의 진행 과정
//   step1.
//   let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
//   let 후 = [];

//   step2.
//   let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
//   let 후 = [12];

//   step3.
//   let 전 = [199, 33, 32, 64, 72, 222, 233];
//   let 후 = [12, 22];

//   step4.
//   let 전 = [199, 33, 64, 72, 222, 233];
//   let 후 = [12, 22, 32];

// - 코드 1: 쉬운 ver
let beforeSelectArr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let afterSelectArr = [];

let beforeSelectLength = beforeSelectArr.length;

// ※ Notice: for문 안에서 pop을 하면 inputArr.length가 변화되어 for문에 영향을 준다.
// for (let i = 0; i < inputArr.length; i++) {
//     console.log(inputArr.pop());
// }

for (let i = 0; i < beforeSelectLength; i++) {
  //   afterSelectArr[afterSelectArr.length] = Math.min(...beforeSelectArr);
  let minValue = Math.min.apply(null, beforeSelectArr);
  afterSelectArr[afterSelectArr.length] = minValue;
  beforeSelectArr.splice(beforeSelectArr.indexOf(minValue), 1);
}

console.log(afterSelectArr);

// - 코드 2: 메소드 최소화 ver (제대로 하려면 자리 바꾸는 것까지)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    // 자리바꿈
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(selectionSort(arr));
// -> [12, 22, 32, 33, 64, 72, 199, 222, 233]

// 3.2 삽입정렬(Insert Sort)
// - 시간복잡도: O(n**2)
// - 입력 배열의 원소를 차례대로 결과 배열에 삽입 -> 결과 배열(반환 배열)에 들어갈 때 자기가 들어갈 (정렬된) 위치에 삽입하는 것!

// ※ 삽입 정렬의 진행과정
// let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// let 후 = [];

// let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
// let 후 = [199];

// let 전 = [33, 12, 32, 64, 72, 222, 233];
// let 후 = [22, 199];

// let 전 = [12, 32, 64, 72, 222, 233];
// let 후 = [22, 33, 199];

// let 전 = [32, 64, 72, 222, 233];
// let 후 = [12, 22, 33, 199];

// - 코드 1.
let beforeInsertArr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let afterInsertArr = [];
let beforeInsertLength = beforeInsertArr.length;

function findInsertIndex(sortedArr, insertValue) {
  // for in: 배열의 인덱스를 반환함
  for (let i in sortedArr) {
    if (insertValue < sortedArr[i]) {
      return i;
    }
  }
  return sortedArr.length;
}

for (let i = 0; i < beforeInsertLength; i++) {
  let insertValue = beforeInsertLength.shift(); // shift(): 배열의 맨 앞의 요소를 반환해준다.
  let index = findInsertIndex(afterInsertArr, insertValue);
  sortedArr.splice(index, 0, insertValue);
  console.log(
    `인덱스: ${index}\n삽입값: ${insertValue}\n정렬된배열: ${sortedArr}\n`
  );
}

// ※ 같은 코드를 한글 버전으로
// let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// let 정렬된배열 = [];
// let 배열의길이 = 입력값.length;

// function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
//     for (const i in 정렬된배열) {
//         if (삽입값 < 정렬된배열[i]) {
//             return i
//         }
//     }
//     return 정렬된배열.length;
// }

// for (let i = 0; i < 배열의길이; i++) {
//     let 삽입값 = 입력값.shift()
//     let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
//     정렬된배열.splice(인덱스, 0, 삽입값);
//     console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
// }

//

// - 코드 2: 교안 풀이(좀 더 어렵게)
function insertIndex(sorted_arr, value) {
  //삽입될 위치를 찾는 함수
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let value = arr.shift();
    //삽입될 위치를 반환함
    let index = insertIndex(sorted_arr, value);
    //삽입될 위치에 값을 반환
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

// 3.3 병합정렬(Merge Sort)
// Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 통일 할 수 있음

// 분할(이해를 돕기 위해 8개로 조정)
// [5, 10, 66, 77], [54, 32, 11, 15]
// [5, 10], [66, 77], [54, 32], [11, 15]
// [5], [10], [66], [77], [54], [32], [11], [15]

//정복(0번째끼리 비교!)
// [5, 10], [66, 77], [32, 54], [11, 15]
// [5, 10, 66, 77], [11, 15, 32, 54]
// [5, 10, 11, 15, 32, 54, 66, 77]

let beforeMergeArr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let afterMergeArr = [];

function mergeSort(unsortedArr) {
  let unsortedLength = unsortedArr.length;

  // 0. 재귀를 위한 종료 조건
  if (unsortedLength <= 1) {
    return unsortedArr;
  }

  // step 1. 분할
  let groupDividePoint = parseInt(unsortedLength / 2);
  let compareGroup1 = mergeSort(unsortedArr.slice(0, groupDividePoint));
  let compareGroup2 = mergeSort(unsortedArr.slice(groupDividePoint));
  // return `group1: ${compareGroup1}, group2: ${compareGroup2}`;

  // step 2. 병합
  // 둘다 배열의 원소를 1개라도 가져야 while문을 돈다.
  while (compareGroup1.length != 0 && compareGroup2.length != 0) {
    if (compareGroup1[0] < compareGroup2[0]) {
      afterMergeArr.push(compareGroup1.shift());
    } else {
      afterMergeArr.push(compareGroup2.shift());
    }
  }
  // 남은 배열의 원소가 있다면 합쳐주는 것
  while (compareGroup1.length != 0) {
    afterMergeArr.push(compareGroup1.shift());
  }

  while (compareGroup2.length != 0) {
    afterMergeArr.push(compareGroup2.shift());
  }
  return afterMergeArr;
}

console.log(Mer);

// 고급
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(mergeSort(arr));

// 3.4 퀵 정렬(Quick Sort)

// 코드 1.
let beforeQuickArr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
function QuickSort(unsortedArr) {
  let unsortedLength = unsortedArr.length;

  if (unsortedLength <= 1) {
    return unsortedArr;
  }

  const pivot = [unsortedArr.shift()];
  const leftFromPivot = [];
  const rightFromPivot = [];

  for (let i in unsortedArr) {
    if (unsortedArr[i] < pivot) {
      leftFromPivot.push(unsortedArr[i]);
    } else {
      rightFromPivot.push(unsortedArr[i]);
    }
  }

  console.log(
    `leftFromPivot: ${leftFromPivot}\nrightFromPivot: ${rightFromPivot}\nPivot: ${pivot}\n`
  );

  return QuickSort(leftFromPivot).concat(pivot, QuickSort(rightFromPivot));
}

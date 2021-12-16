// code snippet
// 빈 배열을 만드는 방법

// 방법 1. Array함수를 통해서 배열 생성
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;

// 방법 2. 빈배열 만들어서 length 조절
x.length = 20;

console.log(x);
// undefined와 null은 메모리 영역을 완전히 비우는 것이 아니기 때문에 비어 있는 개념과는 다른 것!

// 배열 채우기
// 1. 한 숫자로 채우기
Array(10).fill(0); // 비어 있는 배열을 fill을 통해 원하는 숫자로 채울 수 있다.

// 2. 오름차순으로 채우기
Array(100)
  .fill(1)
  .map((value, index) => value + index);

// 준홍님 방법
// undefined된 array에 index + 1의 값으로 채워주는 것
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)

// 3. 문자열로 채우기
".".repeat(9).split("."); // 숫자 9를 해야 10개의 문자열('')가 생성됨
Array.from("a".repeat(10)); // a 10개로 구성된 문자열 배열 생성
Array.from("abc"); // === ['a', 'b', 'c']

// 몸 풀기 2문제

// https://codingdojang.com/scode/393?answer_mode=hide

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 정답
Array(100)
  .fill(1)
  .map((value, index) => value + index) + "";
(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split(8);
(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split(8).length - 1;

// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area

// 방법1. for문 이용하기
let s = [1, 3, 4, 8, 13, 17, 20];
// 최단 거리 쌍의 출력
let arr = new Array();

// ※ for문을 쓸 때는 i의 범위를 지정해서 overflow나지 않게 조심해야 한다.
for (let i = 1; i < s.length; i++) {
  // ***뒤에 것에서 앞에 것
  console.log(s[i] - s[i - 1]);
  arr.push(s[i] - s[i - 1]);
}

let result = arr.indexOf(Math.min.apply(null, arr));
console.log(s[result], s[result + 1]);

// 방법2. python의 zip 함수와 유사하게 동작시키기
let s = [1, 3, 4, 8, 13, 17, 20];
// let ss = [3, 4, 8, 13, 17, 20, undefined]; > 이 부분을 slice를 통해 구현

const zip = (a, b) => a.map((value, index) => [value, b[index]]); //python의 zip함수를 js로 구현!
zip([1, 3, 4], [10, 20, 30]);

// zip(s.slice(), s.slice(1)).slice(0, -1);    // 방법1._마지막 요소가 [20, undefined]여서 잘라주는 것, 다른 언어였다면 undefined처리가 안되고 에러가 났을 것!
let pairs = zip(s.slice(0, s.length - 1), s.slice(1)); // 방법2.

function compare(a, b) {
  if (a[1] - a[0] > b[1] - b[0]) {
    return -1;
  }
  if (a[1] - a[0] < b[1] - b[0]) {
    return 1;
  }
  return 0;

  // [1,3] [3,4]
  // a[1] == 1, a[0] == 3, b[1] == 3, b[0] == 4
}

console.log(pairs.sort(compare)[0]);

// ※ sort()
//    - -1: 순서 유지
//    - 1: 순서 바꿈
//    - 오름차순 정렬:
//      - 뒤에 값이 더 크면 순서 유지
//      - 뒤에 값이 더 작으면 순서 바꿈

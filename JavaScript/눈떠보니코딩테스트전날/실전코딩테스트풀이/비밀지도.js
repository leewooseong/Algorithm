// 카카오톡 18년도 문제_비밀지도
// 주제: 2진법, 진법 연산, replace, or 연산

// or 연산, 이진수 변환을 생각 못하면 끝..

// 1. or 연산
// 2. or 연산 결과를 2진수로 변환
// 3. 0을 공백 1을 #으로 표현하면 끝.

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));

// utility 모음
//   const fillZero = (n, arr) => "0".repeat(n - arr.length) + arr;
//   const zip = (a,b) => a.map((value, index)=>[value, b[index]]);

function solution(n, arr1, arr2) {
  //    풀이 1.
  //   const fillBlank = (n, arr) => " ".repeat(n - arr.length) + arr;

  //   let answer = [];
  //   for (let i = 0; i < n; i++) {
  //     answer.push(
  //       fillBlank(
  //         n,
  //         (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ")
  //       )
  //     );
  //   }

  // 풀이 2.
  let result = [];
  const zip = (a, b) => a.map((value, index) => [value, b[index]]);
  const fillSpace = (n, arr) => {
    return " ".repeat(n - arr.length) + arr;
  };
  for (let [i, j] of zip(arr1, arr2)) {
    result.push(
      fillSpace(n, (i | j).toString(2).replace(/1/g, "#").replace(/0/g, " "))
    );
  }
  return answer;
}

// 풀이에 참고할 수 있는 개념

// ※ 2진 연산: js에서 10진수를 다른 진수로 바꾸는 법
// let x = 9;
// x.toString();       //'9'
// x.toString(2);      //'1001'
// x.toString(8);      //'11'
// x.toString(16);     //'9'

// ※ or 연산
// let x = 9;
// let y = 30;

// x.toString(2);
// y.toString(2);
// let z = (x | y)      // 비트 or 연산

// '01001'
// '11110'
// '--------(or 연산)'
// '11111'

// replace() method chaining
// let z ='11111'
// z.replace(/1/g, '#').replace(/0/g, ' ');

// 위의 작업 한 번에 처리
// (9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

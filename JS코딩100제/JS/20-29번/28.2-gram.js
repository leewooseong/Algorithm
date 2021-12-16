// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

// const input = prompt("문자를 입력해주세요");
const input = "hihihihihhelloehllo";

function twoGram(inputString) {
  // 방법1. for of + indexOf 사용
  // 문제: indexOf가 문자열에서 돌아간다..? any type인데?
  //   for (let name of inputString) {
  //     console.log(name, inputString[inputString.indexOf(name) + 1]);
  //   }
  // 방법2.
  for (let i = 0; i < inputString.length - 1; i++) {
    console.log(`${inputString[i]} ${inputString[i + 1]}`);
  }
}

twoGram(input);

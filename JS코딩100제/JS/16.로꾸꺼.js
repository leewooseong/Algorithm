// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

let input = prompt("단어을 입력해주세요");

function makeReverseString(word) {
  // 따로 정의된 함수가 없는가?
  // array 함수는 있는데 string 함수는 x
  // 풀이 1.
  reverseWord = word.split("").reverse().join("");
  return reverseWord;

  // 풀이 2.
  // let reverseWord = "";
  // for (let spell of word) {
  //   reverseWord = spell + reverseWord;
  // }
  // return reverseWord;
}

console.log(makeReverseString(input));

// 공부할 것
// reverse?
// for in, for of

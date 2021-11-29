//문제 : https://programmers.co.kr/learn/courses/30/lessons/60057
// 입력되는 문자열을 압출할 수 있는 만큼 압축해서 압축된 문자열 길이를 리턴

let word = "aaaabbbbabab";

// var? let? const?
// 정규식?
// 1. 자르는 단어와 단어의 길이를 따로 보관
//  - 자르는 단어의 최대 길이는 2n or 2n -1
// 2. 자르는 단어로 s로 들어오는 문자열을 잘라낸다.
//  -

function solution(s) {
  let inputLength = s.length;
  console.log(inputLength);
  let answer = 0;
  // 압출할 단위에 따라 단어 잘라내기
  let zipWordLength = 2;
  let zipWord = s.slice(0, zipUnit);
  let zippedCount = 0;
  // console.log(zipWord);

  // 단어를 다 쓸때까지
  while (s.length > 0) {}

  return answer;
}

solution(word);

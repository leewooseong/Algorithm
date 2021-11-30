//문제 : https://programmers.co.kr/learn/courses/30/lessons/60057
// 입력되는 문자열을 압출할 수 있는 만큼 압축해서 압축된 문자열 길이를 리턴

// let word = "aaaabbbbabab";
let word = "aaab";

// var? let? const?
// 정규식?
// 1. 자르는 단어와 단어의 길이를 따로 보관
//  - 자르는 단어의 최대 길이는 2n or 2n -1
// 2. 자르는 단어로 s로 들어오는 문자열을 잘라낸다.
//  -

function solution(s) {
  const zipArray = [];

  // let inputLength = s.length;
  // console.log("before zip: ", inputLength);

  // 압출할 단위에 따라 단어 잘라내기

  // 압축하지 않은 남은 문자열을 위한 포인터

  for (let i = 1; i < s.length / 2; i++) {
    let copyString = s;
    let answerWord = "";
    let zipWordLength = i;
    let zipPointer = i * zipWordLength;
    let currentWord = copyString.substr(0, zipWordLength);
    let afterWord = copyString.substr(zipPointer, zipWordLength);

    // 단어를 다 쓸때까지
    while (copyString.length > 0) {
      if (currentWord === afterWord) {
        zipPointer += zipWordLength;
        if (zipPointer >= copyString.length) {
          answerWord.concat(copyString);
          break;
        } else {
          afterWord = copyString.substr(zipPointer, zipWordLength);
        }
      } else {
        // 1. 압축된 단어에 이전의 압축한 내용 삽입하기
        // 2. 압축된 단어에 추가된 내용은 문자열에서 삭제
        // 3. zipPointer, currentWord, afterWord 초기화 하기
        if (zipPointer / zipWordLength !== 1) {
          answerWord =
            answerWord + `${zipPointer / zipWordLength}${currentWord}`;
        } else {
          answerWord = answerWord + currentWord;
        }
        copyString = copyString.slice(zipPointer);
        zipPointer = 0;
        currentWord = copyString.substr(zipPointer, zipWordLength);

        // 3.1. afterWord를 만들 수 없다면 반복문 종료 만들 수 있다면 만들기
        if (zipPointer + zipWordLength - 1 > copyString.length) {
          answerWord.concat(copyString);
          break;
        } else {
          afterWord = copyString.substr(zipPointer, zipWordLength);
        }
      }
    }
    zipArray.push(answerWord.length);
  }

  return Math.min(zipArray);
}

console.log("after zip: ", solution(word));

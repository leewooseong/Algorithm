// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

// map? Map Set을 이용해서 만들어야하나?

const nameInput = prompt("이름들을 구분해서 입력해주세요");
const scoreInput = prompt("점수들을 구분해서 입력해주세요");
// const nameInput = "갑순이 갑돌이";
// const scoreInput = "12 12";

const nameArray = nameInput.split(" ");
const scoreArray = scoreInput.split(" ");

const pairs = {};

// 방법1. for문
for (let i = 0; i < nameArray.length; i++) {
  pairs[nameArray[i]] = parseInt(scoreArray[i]);
}

// 방법2.
// nameArray.forEach((name, index) => {
//   pairs[name] = parseInt(scoreArray[index]);
// });

console.log(pairs);

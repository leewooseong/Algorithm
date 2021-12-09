// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

//배열을 입력 받는 방법
const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");

function calculateAverage(scoreArray) {
  let sum = 0;
  for (let score of scoreArray) {
    sum += parseInt(score);
  }
  console.log(scoreArray, sum);
  // return parseInt(sum / scoreArray.length);
  // 일부 숫자들은 문자열 표현에 e 문자를 사용하기 때문에(예: 6.022 × 10^23의 경우 6.022e23 )
  // 숫자를 자르기 위하여 parseInt를 사용하는 것은 매우 크거나 매우 작은 숫자에 사용하는 경우 예기치 않은 결과가 발생합니다.
  // parseInt는 Math.floor()의 대체품으로 사용해서는 안 됩니다.

  // Math.floor를 사용하자 :)
  return Math.floor(sum / scoreArray.length);
}

console.log(calculateAverage(scores));

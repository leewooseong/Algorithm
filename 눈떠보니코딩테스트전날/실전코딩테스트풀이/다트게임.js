// 다트 게임
// 출처: https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/

// ※ Tip: 문제를 읽다가 다 읽지말고(대충 3번까지 보고) 중간에 입출력을 보면서 문제를 파악해보자.

// 1. 총 3번의 기회
// 2. 각 기회에서 얻을 수 있는 점수는 0-10점까지
// 3. s = 1제곱, t = 2제곱, 3 = 3제곱
// 4. 옵션으로 *, #이 존재
//    - 스타상 당첨 시 해당 점수와 바로 전에 얻은 점수를 2배로 만듦, 아차상 당첨 시 마이너스 점수로 만듦
//    - 첫번째에 스타상 시 첫번째 스타상의 점수만 2배(5번 내용)
// 6. .. 홈페이지 참고
//

// 예제
// 1s2d*3t
// 1(1s), 4(2d), 27(3t)
// 1 4*2 27
// = 37

// 1d2s#10s
// 1 -2 10
// = 9

// 1s*2t*3s
// 1 8 3
// 4 16 3
// = 23

// ※ 문제를 풀 때 테스트 케이스를 만들어서 이를 활용해 효과적으로 문제를 풀 수 있다.
testcase = ["1S2D3T", "1D2S#10S", "1D2S0T"];

for (let c of testcase) {
  console.log(solution(c));
}

const dartResult = "1S2D*3T";

// step3
function solution(dartResult) {
  let answer = [];
  let result = 0;

  for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 숫자 입력이 10이 들어왔을 경우
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      // answer.push(temp**2);      // temp == String type이기 때문에 아래 코드로 작성
      // answer.push(Math.pow(temp, 2));
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2; // 마지막 값
      answer[answer.length - 2] *= 2; // 마지막 전 값
    } else if (dartResult[i] == "#") {
      answer[answer.length - 2] *= -1; // 마지막 전 값
    }
  }

  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }

  return result;
}

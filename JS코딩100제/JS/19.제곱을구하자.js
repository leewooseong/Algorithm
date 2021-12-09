// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const inputs = prompt("제곱을 구할 두 수를 입력해주세요.").split(" ");
const base = parseInt(inputs[0]); // 혹시 있을 ,에 대한 처리
const exponent = parseInt(inputs[1]); // 혹시 있을 ,에 대한 처리

function calculatePower(base, exponent) {
  // 풀이 1.
  //   return base ** exponent;

  // 풀이 2.
  return Math.pow(base, exponent);
}

console.log(calculatePower(base, exponent));

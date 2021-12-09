// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입력 : 10 2
// 출력 : 5 0

const inputs = prompt("두 수를 입력해주세요.").split(" ");

function shareNRemains(dividend, divisor) {
  return `${dividend / divisor} ${dividend % divisor}`;
}

// console.log(shareNRemains(10, 2));
console.log(shareNRemains(inputs[0], input[1]));

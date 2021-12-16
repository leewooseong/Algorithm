// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

const radiusInput = prompt("반지름의 크기를 입력해주세요");
const radius = Number(radiusInput);

function calcCircle(radius) {
  return radius * radius * 3.14;
}

console.log(calcCircle(radius));

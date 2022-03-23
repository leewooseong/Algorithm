// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

const firstInput = prompt("첫 번째 입력");
const secondInput = prompt("두 번째 입력");

function findWord(firstInput, secondInput) {
    console.log(firstInput.indexOf(secondInput));
}

findWord(firstInput, secondInput);

// in 연산자는 객체에서만 사용이 가능하다.

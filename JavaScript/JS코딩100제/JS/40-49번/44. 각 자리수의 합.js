const input = prompt("입력");

function sumOfArray(input) {
    let sum = 0;
    Array.from(input).forEach((value) => {
        sum += parseInt(value);
    });
    console.log(sum);
}

sumOfArray(input);

// string에서는 forEach 메소드를 사용하지 못하는 이유..?
// Array.from?
// - 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만든다.
// 깊은 복사? 얕은 복사?

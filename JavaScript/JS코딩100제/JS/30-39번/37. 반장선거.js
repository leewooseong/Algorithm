// const input = prompt("").split(" ");

// function election(input) {
//     // 내 풀이 객체를 이용하는 방법
//     let maxName = "";
//     let maxCount = 0;
//     const result = {};

//     input.forEach((value) => {
//         if (result[value]) {
//             result[value] += 1;
//         } else {
//             result[value] = 1;
//         }
//     });

//     for (let key in result) {
//         if (result[key] > maxCount) {
//             maxCount = result[key];
//             maxName = key;
//         }
//     }

//     console.log(`${maxName}(이)가 총 ${maxCount}로 반장이 되었습니다.`);
// }

// election(input);

// 관련 공부 내용
// - for in and for of
// - Symbol.iterator
// - Symbol
// - iterator
// - reduce(답안 방법)

// input: 원범 원범 혜원 혜원 혜원 혜원 유진 유진
const array = prompt("이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";

for (let index in array) {
    let val = array[index];
    result[val] =
        result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

// result: {원범: 2, 혜원: 4, 유진: 2}
winner = Object.keys(result).reduce(function (a, b) {
    // a: 큰 값의 key를 다음 a로 넘겨줌, b: 원소를 한 개씩 뽑아낸 것
    return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

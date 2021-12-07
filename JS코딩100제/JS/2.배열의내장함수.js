// 데이터
// var arr = [200, 100, 300];
// //pass를 채우기
// console.log(arr);

// 출력
// [200, 100, 10000, 300]

let arr = [200, 100, 300];

// 방법1.
arr.splice(2, 0, 1000);

console.log(arr);

//다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

//데이터
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

// 풀이 1.
var result = year.concat(`\/${month}/${day} ${hour}:${minute}:${second}`);

console.log(result);

// 출력
//2019/04/26 11:34:27

// concat?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

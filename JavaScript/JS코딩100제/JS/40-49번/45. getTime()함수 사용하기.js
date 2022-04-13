// getTime : 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
// 1초 : 1000ms
// 1분(60초) : 6000ms
// 1시간(60분) : 360000ms
// 1일(24시간) : ...
// 1년(365일) : ...
const dateObject = new Date();
console.log(dateObject);
console.log(dateObject.getTime());

const thisYear = Math.floor(dateObject.getTime() / (1000 * 60 * 60 * 24 * 365));
console.log(thisYear + 1970);

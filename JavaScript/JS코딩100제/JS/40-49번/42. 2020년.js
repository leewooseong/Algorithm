// 2020년 a월 b일은 무스 요일일까
// 2020년 1월 1일은 수요일

// 1월 8일 === 월요일

// a월 b일을 이용해서 몇일이 지났는지 파악

const input = prompt("입력").split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
let totalDay = 0;

// 31일인 달을 나타내는 array
const arr = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];

// 1월 n일은 31일을 더할 필요가 없으므로 2월달부터 더해준다.
for (let i = 0; i < a - 1; i++) {
    if (a == 1) {
        continue;
    }
    if (arr[i]) {
        totalDay += 31;
    } else if (i == 1) {
        totalDay += 29;
    } else {
        totalDay += 30;
    }
}

totalDay += b;

console.log(totalDay);
console.log(totalDay % 7);

switch (totalDay % 7) {
    case 0:
        console.log("화요일");
        break;
    case 1:
        console.log("수요일");
        break;
    case 2:
        console.log("목요일");
        break;
    case 3:
        console.log("금요일");
        break;
    case 4:
        console.log("토요일");
        break;
    case 5:
        console.log("일요일");
        break;
    case 6:
        console.log("월요일");
        break;
}

// Date를 통한 해결 방법
// - Date를 통해서 Date를 생성해서 이를 해결할 수 있다.
// - Date 객체를 생성해서 prototype method인 getDay를 이용해서 이를 뽑아낼 수 있다.

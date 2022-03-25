const input = prompt("").split(" ");

function election(input) {
    // 내 풀이 객체를 이용하는 방법
    let maxName = "";
    let maxCount = 0;
    const result = {};

    input.forEach((value) => {
        if (result[value]) {
            result[value] += 1;
        } else {
            result[value] = 1;
        }
    });

    for (let key in result) {
        if (result[key] > maxCount) {
            maxCount = result[key];
            maxName = key;
        }
    }

    console.log(`${maxName}(이)가 총 ${maxCount}로 반장이 되었습니다.`);
}

election(input);

// 관련 공부 내용
// - for in and for of
// - Symbol.iterator
// - Symbol
// - iterator
// - reduce(답안 방법)

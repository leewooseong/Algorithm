// 버블 정렬
// 가벼운 거품이 올라오는 모양
// 입력 : 4 2 3 8 5

function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        // console.log(i);
        for (let j = result.length - i - 1; j >= 0; j--) {
            console.log(j);
            if (result[j] > result[j + 1]) {
                let temp = result[j + 1];
                result[j + 1] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

const items = prompt("입력해주세요.")
    .split(" ")
    .map((n) => {
        return parseInt(n, 10);
    });

console.log(bubble(items));

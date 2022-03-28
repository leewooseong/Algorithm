const input = prompt("입력");
const hello = "hello";

function convertQToE(input) {
    // 1. 내 풀이
    const result = Array.from(input).map((value) => {
        return value == "q" ? "e" : value;
    });
    console.log(result.join(""));

    // 2. 함수 사용
    function replaceAll(str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
    }

    console.log(replaceAll(input, "q", "e"));

    // 3. 정규식 사용
    console.log(word.replace(/q/gi, "e"));
}

convertQToE(input);

// 문자열 변경이 안되는 이유?
// 문자열은 원시 타입이기 때문에 변경이 불가하다.

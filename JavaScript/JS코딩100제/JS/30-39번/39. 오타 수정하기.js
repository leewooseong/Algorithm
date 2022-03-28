// **문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

const input = prompt("입력");
const hello = "hello";

function convertQToE(input) {
    const result = Array.from(input).map((value) => {
        return value == "q" ? "e" : value;
    });
    console.log(result.join(""));
}

convertQToE(input);

// 문자열 변경이 안되는 이유?
// 문자열은 원시 타입이기 때문에 변경이 불가하다.

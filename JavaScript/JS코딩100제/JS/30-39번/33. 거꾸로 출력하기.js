const input = prompt("숫자를 입력하세요.");

function printReverse(input) {
    // split(" "): 공백을 기준으로 분리
    // split(""): 공백까지 한 개의 단어로 인식
    const reverseArr = input.split("").reverse();
    let reverseString = "";
    for (let i = 0; i < reverseArr.length; i++) {
        reverseString += reverseArr[i];
    }
    console.log(reverseString);
}

printReverse(input);

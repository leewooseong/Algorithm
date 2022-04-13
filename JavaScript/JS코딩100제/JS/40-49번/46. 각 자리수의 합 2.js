//1234567891011121314151617181920
// 다른 풀이 입력
// const input = BigInt(1234567891011121314151617181920);
// // 내풀이 입력
const input = prompt("입력");

function SumOfNum2(input) {
    // 다른 풀이
    // let sum = 0;
    // let dividingNum = 100;
    // let remain;
    // console.log(input);
    // while (input >= 1) {
    //     if (input === 1) {
    //         sum += 1;
    //         break;
    //     }
    //     remain = input % dividingNum;
    //     input = Math.floor(input / dividingNum);
    //     console.log("input:", input, remain);
    //     if (remain === 10) {
    //         dividingNum = 10;
    //         sum += remain;
    //     }
    //     sum += remain;
    // }
    // console.log(sum);

    // // 내 풀이
    let sum = 0;
    Array.from(input).forEach((value) => {
        sum += parseInt(value);
    });
    console.log(sum);
}

SumOfNum2(input);

// 공부할 것
// BigInt
// JS에서 큰수를 다루는 방법

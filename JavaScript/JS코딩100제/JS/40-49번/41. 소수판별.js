const input = parseInt(prompt("숫자를 입력해주세요"));

function checkPrimeNumber(input) {
    if (input === 1) {
        console.log("NO");
        return;
    }
    // 1에서 자신 사이의 수 중에서 1과 자신을 제외한 모든 수를 check
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

checkPrimeNumber(input);

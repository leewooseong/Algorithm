const input = prompt("몇 단을 출력할까요?");

function printGugudan(input) {
    let result = `${input}`;
    for (let i = 2; i < 10; i++) {
        result += ` ${input * i}`;
    }
    console.log(result);
}

printGugudan(input);

const input = prompt("입력").split(" ");

function buyCandy(input) {
    const sortedInput = input.sort(function (a, b) {
        return b - a;
    });
    // console.log(sortedInput);

    let count = 3;
    let score;
    for (let i = 0; i < sortedInput.length; i++) {
        if (count === 0) {
            console.log(i);
            break;
        } else if (score !== sortedInput[i]) {
            score = sortedInput[i];
            count -= 1;
        }
    }
}

buyCandy(input);

const input = prompt("입력").split(" ");

function buyCandy(input) {
    const sortedInput = input.sort(function (a, b) {
        return b - a;
    });
    // console.log(sortedInput);

    let count = 3;
    let score;
    sortedInput.forEach((value, index) => {
        if (count === 0) {
            console.log(index);
            return;
        } else if (score !== value) {
            score = value;
            count -= 1;
        }
    });
}

buyCandy(input);

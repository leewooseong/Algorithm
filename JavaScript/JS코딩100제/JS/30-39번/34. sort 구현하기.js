const input = prompt("입력").split(" ");

function makeSort(input) {
    for (let i = 0; i < input.length - 1; i++) {
        console.log(input[i], input[i + 1]);
        if (!input[i] > input[i + 1]) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}
makeSort(input);
// 176 156 155 165 166 169
// 155 156 165 166 169 176

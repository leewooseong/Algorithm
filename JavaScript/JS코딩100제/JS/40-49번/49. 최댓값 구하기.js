// 10 9 8 7 6 5 4 3 2 1
const input = prompt("입력").split(" ");
console.log(input);

const numberArray = input.map((value) => {
    return parseInt(value);
});
console.log(numberArray);

console.log(Math.max(...numberArray));

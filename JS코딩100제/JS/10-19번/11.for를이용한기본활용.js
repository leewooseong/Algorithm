// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let sum = 0;

// 풀이 1.
//pass
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// 정답이 되는 수(등차수열의 합으로 구한 것)
console.log((100 * (100 + 1)) / 2);

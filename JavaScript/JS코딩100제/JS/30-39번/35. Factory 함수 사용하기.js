function one(n) {
    // 클로저
    function two(input) {
        let result = 1;
        // Math.pow를 쓰는 방법도 있다..
        for (let i = 0; i < n; i++) {
            result *= input;
        }
        return result;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

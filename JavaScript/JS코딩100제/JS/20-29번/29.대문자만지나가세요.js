// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

const input = prompt("문자를 입력하세요.");

// 내 풀이
// function checkUppercase(alphabet) {
//     if (alphabet.length > 1) {
//         console.log("한 단어만 입력해주세요.");
//         return;
//     }
//     if (64 < alphabet.charCodeAt(0) && alphabet.charCodeAt(0) < 91) {
//         console.log("YES");
//     } else if (96 < alphabet.charCodeAt(0) && alphabet.charCodeAt(0) < 123) {
//         console.log("NO");
//     } else {
//         console.log("옳바른 입력이 아닙니다. 다시 입력해주세요.");
//     }
// }

// 책 풀이
function checkUppercase(alphabet) {
    if (alphabet == alphabet.toUpperCase()) {
        console.log("YES");
        console.log(alphabet);
        console.log(alphabet.toUpperCase());
    } else {
        console.log("NO");
    }
}

checkUppercase(input);

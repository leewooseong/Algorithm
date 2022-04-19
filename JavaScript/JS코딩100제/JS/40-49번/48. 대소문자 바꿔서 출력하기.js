const input = prompt("입력");

function changeCase(input) {
    const reverseCase = Array.from(input).map((letter) =>
        letter === letter.toUpperCase()
            ? letter.toLowerCase()
            : letter.toUpperCase()
    );
    console.log(reverseCase.join(""));
}

changeCase(input);

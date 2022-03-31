const limit = prompt("제한 무게를 설정해주세요.");

function rideARides(limit) {
    let sumOfWeight = 0;
    let availablePeople = 0;
    let weight;

    do {
        // parseInt를 해주지 않으면 문자열로 형변환이 되기 때문에 정상적인 결과를 얻을 수 없게 된다.
        weight = parseInt(prompt("타는 사람의 무게를 입력해주세요"));
        console.log(weight);
        sumOfWeight += weight;
        availablePeople += 1;
    } while (sumOfWeight <= limit);

    console.log(availablePeople);
}

rideARides(limit);

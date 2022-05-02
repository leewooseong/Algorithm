function mergeSort(arr) {
    //  입력된 배열의 원소가 1개이면 리턴
    if (arr.length <= 1) {
        return arr;
    }
    //  분할하기
    //  mid: 분할점, left : 왼쪽 부분 배열, right : 오른쪽 부분 배열
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    //  정렬 및 병합하기
    return merge(mergeSort(left), mergeSort(right));
}

// 분할된 배열을 정렬 및 합치는(병합하는) 함수
function merge(left, right) {
    let result = [];
    // 정렬된 원소들을 차례로 result에 추가하기
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // 둘 중에 남아있는 배열이 있다면 정렬된 배열 뒤에 추가해준다.
    // 이때 두 배열 중 한 개는 이미 다 정렬이 되어있고 나머지 한 개가 정렬이 안된 채 남아있기 때문에 아래 2개의 while문 중 1개만 수행된다.
    if (left.length) {
        result.push(...left);
    }
    if (right.length) {
        result.push(...right);
    }
    return result;
}

// 입력된 배열은 숫자로 모두 변환
const array = prompt("배열을 입력하세요")
    .split(" ")
    .map((n) => parseInt(n, 10));
console.log(mergeSort(array));

//  합병 정렬(분할 + 합병)
//  의미 : 입력이 2개의 부분 문제로 분할, 부분 문제의 크기가 1/2로 감소하는 분할 정복 알고리즘
//  시간복잡도 : O(N * logN)
//    - 정확히 반씩 쪼개면서 나누기 때문에 항상 O(N * logN)을 보장한다.
//  분할
//  - 배열을 반으로 나누고 나눈 배열도 원소가 1개인 배열이 될 때까지 재귀함수를 이용해서 분할
//  합병
//  - 새로운 배열에다 분할된 배열들을 정렬해서 넣는다.
//  - 이로써 정렬된 배열이 완성되게 된다.

// 입력 : Number Array
// 출력 : Sorted Number Array
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
    //  둘 중에 남아있는 배열이 있다면 정렬된 배열 뒤에 추가해준다.
    //  이때 두 배열 중 한 개는 이미 다 정렬이 되어있고 나머지 한 개가 정렬이 안된 채 남아있기 때문에 아래 2개의 while문 중 1개만 수행된다.
    if (left.length) {
        result.push(...left);
    }
    if (right.length) {
        result.push(...right);
    }
    return result;
}

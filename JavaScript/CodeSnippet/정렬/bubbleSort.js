// 버블 정렬
// 의미 : 가벼운 거품이 올라오는 모양(오름차순 기준)
// 시간복잡도 : O(1 ~ n^2)
//   - input insensitive : 기본적으로 모두 비교 -> O(n^2)
//   - input sensitive : if 문을 넣음으로써 정렬된 배열에 대해서 O(1)까지 줄수 있다.

// 입력 : Number Array
// 출력 : Sorted Number Array
function bubble(arr) {
    let result = arr.slice(); // 원본 배열을 복사하여 사용

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j >= result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j + 1];
                result[j + 1] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

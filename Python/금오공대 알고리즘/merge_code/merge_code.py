# arr: 정렬한 입력 array
# p: arr(배열) 시작 인덱스
# q: arr(배열) 끝 인덱스
# k: 분할점
# 병합 작업
def merge(arr, p, k ,q):
    # 합병을 위한 arr
    c = []
    i = p
    j = k + 1

    # 분할된 지점을 기준으로 값을 추가한다.
    while i <= k and j <= q:
        # 작은 값이 먼저 추가된다.
        if arr[i] < arr[j]:
            c.append(arr[i])
            i += 1
        elif arr[i] > arr[j]:
            c.append(arr[j])
            j+=1
        # 값이 같다면 둘다 추가
        else:
            c.append(arr[i])
            c.append(arr[j])
            i += 1
            j += 1

    # 분할된 영역 중 정렬되고 한 영역만 남은 경우
    while i <= k:
        c.append(arr[i])
        i += 1
    while j <= q:
        c.append(arr[j])
        j += 1

    # 정렬한 배열 값을 원래 배열에 저장
    j = 0
    for i in range(p, q+1):
        arr[i] = c[j]
        j += 1

# arr: 정렬한 입력 array
# p: arr(배열) 시작 인덱스
# q: arr(배열) 끝 인덱스
def mergeSort(arr, p, q):
    if p < q:
        # 분할점 선정
        k = (p + q) // 2
        # 분할 작업
        mergeSort(arr, p, k)
        mergeSort(arr, k+1, q)
        # 병합 작업
        merge(arr, p, k, q)

alist = [4, 7, 2, 1, 5, 8, 6, 3, 9]
mergeSort(alist, 0, 8)
print(alist)
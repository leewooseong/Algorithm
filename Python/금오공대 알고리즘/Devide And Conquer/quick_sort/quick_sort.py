import random

# 정복하는 부분
def partition(A, left, right):
    # 1. 피봇 값 랜덤하게 설정
    p = random.randint(left, right)
    # 2. 피봇을 제일 왼쪽으로 이동
    if p != left:
        A[left], A[p] = A[p], A[left]
    # 3. 피봇 값을 기준으로 수 나누기
    i = left+1
    j = right
    done = False
    while not done:
        while i <= j and A[i] <= A[left]:
            i += 1
        while j >= i and A[j] >= A[left]:
            j -= 1
        # 교차
        if i > j:
            done = True
        # 교차한 것이 아니면 각 값을 바꿔준다. (i: 피봇보다 큰 값에 위치, j: 피봇보다 작은 값에 위치)
        else:
            A[i], A[j] = A[j], A[i]
    # 피봇 값에 따라 분류가 끝나고 i,j가 교차하고 나면 j는 i를 통해 정렬해 놓은 pivot보다 작은 값 배열의 끝 index를 가리키게 된다.
    # 따라서 j와 pivot 값을 바꿔주면 pivot을 기준으로 작은 값 큰 값을 분류할 수 있다.
    A[left], A[j] = A[j], A[left]
    return j

# 정복 후 분할
def qsort(A, left, right):
    if left < right:
        p = partition(A, left, right)
        qsort(A, left, p-1)
        qsort(A, p+1, right)

A = [6, 3, 11, 9, 12, 2, 8, 15, 18, 10, 7, 14]
qsort(A, 0, len(A-1))
print(A)
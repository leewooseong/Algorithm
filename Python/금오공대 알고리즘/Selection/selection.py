import random

# 퀵 정렬을 적용하여 pivot 기준으로 나눈다.
# 반환값으로 pivot의 index를 반환한다.
def partition(A, left, right):
    p = random.randint(left, right)
    if p != left:
        A[left], A[p] = A[p], A[left]
    i = left + 1
    j = right
    pvalue = A[left]
    done = False
    while not done:
        while i < j and A[i] <= pvalue:
            i += 1
        while j >= i and A[j] >= pvalue:
            j -= 1
        if i > j:
            done = True
        else:
            A[i], A[j] = A[j], A[i]
    A[left], A[j] = A[j], A[left]
    return j

# Selection 알고리즘
def selection(A, left, right, k):
    # 퀵 정렬을 이용해 pivot 기준으로 값을 나누고 pivot의 위치를 반환.
    p = partition(A, left, right)
    # small group의 사이즈를 구함
    S = (p - 1) - left + 1
    # 어느 group에 속해 있는 지 확인
    if k <= S:
        return selection(A, left, p-1, k)           # in small group -> small group에 대해서 다시 selection 알고리즘 수행, large group 및 pivot은 신경쓰지 않는다.
    elif k == S + 1:
        return A[p]                                 # equal pivot -> return pivot value
    else:
        return selection(A, p+1, right, k-S-1)      # in large group -> k index를 수정하여 large group 범위에 대해 selection 알고리즘을 수행, small group 및 pivot은 신경쓰지 않는다.

A = [6 , 3, 11, 9, 12, 2, 8, 15, 18, 10, 7, 14]
data = selection(A, 0, len(A) - 1, 7)
print(data)
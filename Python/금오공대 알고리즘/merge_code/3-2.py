def merge(listA, listB):
    listC = []
    a = listA.pop(0)
    b = listB.pop(0)

    while a >= 0 or b >= 0 :
        # 작은 수를 c에 붙인다. 리스트가 남아있다면 그 다음 수를 뽑아서 저장한다.
        if (a < b and a != -1) or (b == -1 and a > 0):
            listC.append(a)
            if listA:
                a = listA.pop(0)
            else:
                a = -1
        elif a == b :
            # a, b 둘 다 추가
            listC.append(a)
            if listA:
                a = listA.pop(0)
            else:
                a = -1
            listC.append(b)
            if listB:
                b = listB.pop(0)
            else:
                b = -1
        elif (a > b and b != -1) or (a == -1 and b > 0):
            listC.append(b)
            if listB:
                b = listB.pop(0)
            else:
                b = -1

    return listC


# mergeSort 함수
 # 1. 길이 알아내기 -> 분할 부분 찾기
# 2. 분할부분을 나눠서 각 부분마다 재귀함수
# 3. 재귀함수 마지막에 분활된 함수들을 Merge 함수를 통해 합병시키기
def mergeSort(list):

    length = len(list)
    if (length == 1):
        return list

    devidePoint = length // 2
    return merge(mergeSort(list[:devidePoint]), mergeSort(list[devidePoint:]))


alist = [4, 26, 9, 3, 1, 72, 566, 43]

#alist = [4, 26]

blist = mergeSort(alist)

print(blist)

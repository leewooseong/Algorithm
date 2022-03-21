import random

#버블 정렬
def BubbleSort(input):
    length = len(input)
    for i in range(length - 1):
        for j in range(0, length - 1 - i):
            if input[j] > input[j + 1]:
                input[j], input[j + 1] = input[j+1], input[j]
    if (CheckSort(input)):
        return input
    else:
        return None

#삽입 정렬
def InsertSort(input):
    length = len(input)
    for i in range(1, length):
        currentElement = input[i]
        j = i - 1
        while(j >= 0) and (input[j] > currentElement):
            input[j + 1] = input[j]
            j = j - 1
        input[j + 1] = currentElement
    if (CheckSort(input)):
        return input
    else:
        return None

#선택 정렬
def SelectionSort(input):
    length = len(input)
    for i in range(length - 1):
        min = i
        for j in range(i+1, length):
            if input[min] > input[j]:
                min = j
        input[min], input[i] = input[i], input[min]
    if (CheckSort(input)):
        return input
    else:
        return None

#셸 정렬
def ShellSort(input, gap):
    length = len(input)
    for h in range(gap,0,-1):
        for i in range(h,length):
            currentElement = input[i]
            j = i;
            while j >= h and input[j - h] > currentElement:
                input[j] = input[j - h]
                j = j - h
            input[j] = currentElement
    if (CheckSort(input)):
        return input
    else:
        return None

# 힙 정렬
def HeapSort(input):
    length = len(input)
    input.insert(0,-1);
    heapSize = length

    # 최대 힙 만들기
    for i in range(2, length+1):
        child = i;
        while True:
            root = child // 2
            if input[root] < input[child]:
                input[root], input[child] = input[child], input[root]
            child = root
            if(child == 1):
                break

    # 크기를 줄여가면서 반복적으로 힘을 구성
    for i in range(1, length):
        # 가장 큰 값을 맨 뒤로
        input[1], input[heapSize] = input[heapSize], input[1]
        heapSize -= 1

        root = 1

        while True:
            if(root == 1):
                leftChild = 2
                rightChild = 3
            else:
                leftChild = 2 * root
                rightChild = 2 * root + 1
            # 자식 중에 더 큰 값을 찾기
            if rightChild <= heapSize:
                if input[leftChild] < input[rightChild]:
                    child = rightChild
                else:
                    child = leftChild
            elif leftChild <= heapSize :
                child = leftChild
            else: child = rightChild
            # 루트보다 자식이 더 크다면 교환
            if(child <= heapSize and  input[root] < input[child]):
                input[root], input[child] = input[child], input[root]
            root = child
            if child >= heapSize:
                break
    if (CheckSort(input)):
        return input
    else:
        return None

def getrdx(l, modulus):
    maxi = 0
    for val in l:
        digit = 0
        while val > 0:
            digit += 1
            val //= modulus
        if digit > maxi:
            maxi = digit
    return maxi

def RedixSort(input):
    radix, modulus, div = 10, 10 ,1
    nordx = getrdx(input, modulus)
    for i in range(nordx):
        buckets = [[] for i in range(radix)]
        for value in input:
            buckets[(value % modulus) // div].append(value)
        modulus, div = modulus * 10, div * 10
        input = []
        for x in buckets:
            input.extend(x)
    if (CheckSort(input)):
        return input
    else:
        return None



# 임의의 수 2,000개의 정수를 가지는 리스트 생성(범위 0 ~ 10,000)
def MakeList():
    list = [random.randrange(0,10000) for i in range(2000)]
    return list

# 리스트 체크 함수
def CheckSort (list):
    for i in range(len(list) - 1):
        if list[i] > list[i+1]:
            print("정렬이 올바르지 않습니다.")
            return 0
    return 1



inputList = MakeList()
print("inputList:", inputList)
print("BubbleSort 결과:",BubbleSort(inputList))
print("SelectionSort 결과:",SelectionSort(inputList))
print("InsertSort 결과:",InsertSort(inputList))
print("SHellSort 결과:", ShellSort(inputList, 5))
print("HeapSort 결과:", HeapSort(inputList))
inputList.pop(0)
print("RedixtSort 결과:", RedixSort(inputList))
# # 입력: 연속된 행렬
# # 출력: 입력의 행렬 곱셈에 필요한 원소의 최소 곱셉 횟수

def printMatrix(list):
    for i in range(len(list)):
        for j in range(len(list[0])):
            print(list[i][j], end=" ")
        print("\n")

# # 최선의 행렬 곱 출력
def printChain (k, list):
    print( list[:k + 1],'*',list[k + 1:])
    # (A1 * A2 * ...) 형식의 곱셈이 성립되는 경우 1
    # (A1 * A2) * A3
    #  k = 1
    if k >= 1:
        print("\n왼쪽 부분 문제의 곱셈 형태")
        printChain(matrixK[0][k],list[:k+1])
    if len(list) - (k+1) >= 2:
        print("\n오른쪽 부분 문제의 곱셈 형태")
        printChain(matrixK[k + 1][len(list) - 1] - (k+1), list[k+1:])



# Matrix Chain을 위한 matrix 만들기
def makeMatrix():
    # 1에서 length - 1까지 부분문제의 크기를 조정
    for L in range(1,length):
        # 부분 문제의 크기가 작은 것부터 차례대로 구한다.
        # i: 행, j: 열
        for i in range(0, length - L):
            j =  i + L
            matrix[i][j] = 9999999999999999999999999999999999999999999999
            # k: 결합 법칙을 적용할 수 있는 경우의 수
            for k in range(i, j):
                temp = matrix[i][k] + matrix[k + 1][j] + inputList[i][0] * inputList[k][1] * inputList[j][1]
                if (temp < matrix[i][j]):
                    matrix[i][j] = temp
                    matrixK[i][j] = k

    print('best multiply')
    print("\n전체 부분 문제의 곱셈 형태")
    printChain(matrixK[0][length - 1], inputList)

    print('\n\nMatrix Chain')
    printMatrix(matrix)

    return matrix[0][length - 1]


# 입력: 곱하고자하는 연속된 행렬의 행,열 길이 정보
inputList = [[10,20], [20,5], [5,15], [15,30]]
length = len(inputList)
matrix = [[0 for col in range(length)]for row in range(length)]
matrixK = [[-1 for col in range(length)] for row in range(length)]


print(makeMatrix())


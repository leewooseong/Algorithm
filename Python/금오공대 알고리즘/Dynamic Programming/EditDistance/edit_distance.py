



def printMatrix(list):
    for i in range(len(list)):
        for j in range(len(list[0])):
            print(list[i][j], end=" ")
        print("\n")

# input
sourceWord = input()
targetWord = input()
# print(word1, word2)

# make matrix
# 엡실론을 포함해서 +1 해준다.
editDistance = [[0 for col in range(len(targetWord) + 1)] for row in range(len(sourceWord) + 1)]

for row in range(len(sourceWord) + 1):
    editDistance[row][0] = row
for col in range(len(targetWord) + 1):
    editDistance[0][col] = col
# print(editDistance)

for i in range(1, len(sourceWord) + 1):
    for j in range(1, len(targetWord) + 1):
        # print(sourceWord[i-1], targetWord[j-1])
        sWord = sourceWord[i - 1]
        tWord = targetWord[j - 1]
        # a 값 결정
        if sourceWord[i-1] == targetWord[j - 1]:
            a = 0
        else:
            a = 1

        # 값 결정
        editDistance[i][j] = min(editDistance[i][j - 1] + 1, editDistance[i - 1][j] + 1,editDistance[i - 1][j - 1] + a)
        eValue = editDistance[i][j]
# print(editDistance)
printMatrix(editDistance)
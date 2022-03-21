# print matrix
def printMatrix(list):
    for i in range(len(list)):
        for j in range(len(list[0])):
            print(list[i][j], end=" ")
        print("\n")

#input
C = 10
# [item, weight, value]
items = [[1,5,10],
         [2,4,40],
         [3,6,30],
         [4,3,50]]

knapsack = [[0 for col in range(C + 1)] for row in range(len(items) + 1)]
printMatrix(knapsack)

for i in range(1, len(items) + 1):
    for w in range(1, C + 1):
        # print(items[i - 1][1])
        # 담을 공간이 없다면 물건을 안 넣은 전 단계의 value를 가져온다.
        if items[i - 1][1] > w:
            knapsack[i][w] = knapsack[i - 1][w]
        # 담을 공간이 있다면 해당 물건을 안넣는 경우와 넣는 경우 중 큰 값을 이용한다.
        else:
            knapsack[i][w] = max(knapsack[i-1][w],knapsack[i-1][w - items[i - 1][1]] + items[i - 1][2])

printMatrix(knapsack)
def printMatrix(list):
    for i in range(len(list)):
        print(i,"원일 때 ",list[i])


def printCoin(list, coin):
    print("거스름돈: ",coin,"원","\n16원: ",list[coin][1][16],"\n10원: ",list[coin][1][10],"\n5원: ",list[coin][1][5],"\n1원: ",list[coin][1][1])

coin = eval(input("거스름돈: "))

coinNumList = [16,10,5,1]

# 입력 거스름돈에 대해 거슬러 줄 동전의 개수를 담는 배열
coinExchange = [[coin + 1,{16:0, 10:0, 5:0,1:0}] for i in range(coin + 1)]

coinExchange[0][0] = 0;

for Exchange in range(len(coinExchange)):
    for coinNum in coinNumList:
        if coinNum <= coinExchange[Exchange][0] and coinExchange[Exchange - coinNum][0] + 1 < coinExchange[Exchange][0]:
            coinExchange[Exchange][0] = coinExchange[Exchange - coinNum][0] + 1
            coinExchange[Exchange][1] = coinExchange[Exchange - coinNum][1].copy()
            coinExchange[Exchange][1][coinNum] = coinExchange[Exchange][1][coinNum] + 1

printMatrix(coinExchange)
print()
printCoin(coinExchange, coin)


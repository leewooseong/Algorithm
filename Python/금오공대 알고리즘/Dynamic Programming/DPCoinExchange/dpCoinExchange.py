
coin = eval(input("거스름돈: "))

coinNumList = [16,10,5,1]

# 입력 거스름돈에 대해 거슬러 줄 동전의 개수를 담는 배열
coinExchange = [(coin+1) for i in range(coin+1)]
coinExchange[0] = 0;

for Exchange in range(len(coinExchange)):
    for coinNum in coinNumList:
        if coinNum <= coinExchange[Exchange] and coinExchange[Exchange - coinNum] + 1 < coinExchange[Exchange]:
            coinExchange[Exchange] = coinExchange[Exchange - coinNum] + 1

print(coinExchange)


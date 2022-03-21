
coin = eval(input("거스름돈을 입력하세요: "))
n500 = n170 = n100 = n50 = n10 = 0
sum = 0

if(coin >= 500):
    n500 = coin // 500
    sum += n500
    coin %= 500
if(coin >= 170):
    n170 = coin // 170
    sum += n170
    coin %= 170
if(coin >= 100):
    n100 = coin // 100
    sum += n100
    coin %= 100
if(coin >= 50):
    n50 = coin // 50
    sum += n50
    coin %= 50
if(coin >= 10):
    n10 = coin // 10
    sum += n10
    coin %= 10

print('500원: ' + str(n500) + "\n" +"170원: " + str(n170) + "\n" + "100원: " + str(n100) + "\n" + "50원: " + str(n50) + "\n" + "10원: " + str(n10))
print("총 쓰인 동전 갯수: " + str(sum))
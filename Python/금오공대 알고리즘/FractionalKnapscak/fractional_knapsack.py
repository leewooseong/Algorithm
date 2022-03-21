# 배낭의 최선의 값 구하는 함수
# capacity: 배낭의 용량
# weights: 각 물건의 무게를 리스트로 제공
# values: 물건의 가치를 리스트로 제공
# names: 물건의 이름을 리스트로 제공
def get_optimal_value(capacity, weights, values, names):
    size = len(weights)
    vpw = [(values[i] / weights[i], weights[i], names[i]) for i in range(size)]

    # sorted([], reverse = True) 내림 차순 정렬_큰 물건부터 넣기 위해
    densities = sorted(vpw, reverse = True)

    # 배낭의 전체 가치
    finalValue = 0

    # enumerate(): index 번호와 컬렉션의 원소를 tuple 형태로 반환
    # 반복문: 전체 용량에서 무게를 빼주는 방식
    for i, v in enumerate(densities) :
        a = min(capacity,v[1])
        finalValue += a * v[0]
        print(v[2], a, "gram is taken")
        capacity -= a
    return finalValue

capacity = 220
values = [5000, 600000, 100000, 750000, 80000, 900000, 2000000, 1000000, 1200000, 1500000]
weights = [50, 10, 25, 15, 20, 20, 40, 35, 60, 55]
names = ["주석", "백금", "은", "금", "동", "루비", "다이아몬드", "아쿠아마린", "사파이어", "터키석"]
opt_value = get_optimal_value(capacity, weights, values, names)
print("Value of the knapsack is", opt_value)
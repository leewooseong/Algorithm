import math

# 두점의 거리 계산
def dist(p1, p2):
    return math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)

# 두점 또는 세점의 가장 짧은 거리를 리턴해주는 함수
def brute(ax):
    mi = dist(ax[0], ax[1])
    p1 = ax[0]                  # 첫 번째 점
    p2 = ax[1]                  # 두 번째 점
    ln_ax = len (ax)
    if ln_ax == 2 :             # 점이 2개 뿐이라면 각 점과 거리를 반환
        return p1, p2, mi
    for i in range(ln_ax - 1):  # 점이 3개라면 반복문을 통해 최근접 쌍과 거리를 반환한다.
        for j in range(i + 1, ln_ax):
            if i != 0 and j != 1:
                d = dist(ax[i], ax[j])
                if d < mi:
                    mi = d
                    p1, p2 = ax[i], ax[j]
    return p1, p2, mi

# 중간영역을 처리하는 부분
def closest_split_pair(a_x, a_y, delta, best_pair):

    # x의 중간점 찾기
    ln_x = len(a_x)
    mx_x = a_x[ln_x//2][0]

    # y축으로 정렬된 리스트 중에 delta 안에 잇는 것만 뽑아내기
    s_y = [x for x in a_y if mx_x - delta <= x[0] <= mx_x + delta]
    best = delta

    # 중간영역에 포함된 점들의 길이_크기
    ln_y = len(s_y)
    # 맨 위의 점은 더이상 비교할 대상이 없기 때문에
    for i in range(ln_y - 1):
        # 남은 것이 8개 이하라면 ln-y번 만큼만 비교
        for j in range (i + 1, min(i + 8, ln_y)):
            # s_y[i]: 제일 아래의 점, s_y[j]: 아래의 점과 비교할 점
            p, q  = s_y[i], s_y[j]
            dst = dist(p,q)
            if dst < best:
                best_pair = p, q
                best = dst
    print("최단거리: ", best, "\n좌표쌍: ", best_pair[0], ",", best_pair[1])
    return best_pair[0], best_pair[1], best


def closest_pair(ax, ay):

    ln_ax = len(ax)         # x축 기준으로 정렬한 데이터 ax의 길이

    if ln_ax <= 3:
        return brute(ax)
    # 중간점 찾기
    mid = ln_ax // 2
    # x축 기준 비슷한 크기를 가진 그룹으로 나누기
    Lx = ax[:mid]
    Rx = ax[mid:]
    # 중간점의 x 좌표를 찾은 것
    # y축에 값이 중복된다면?
    midpoint = ax[mid][0]

    print("midpoint: ",midpoint)
    # y기준으로 정렬된 ay 같은 경우는 x축으로 나눈 그룹 중 어떤 그룹에 속해있는지 모르기 때문에 명시를 해주어야한다.
    # Ly, Ry: y축 기준으로 정렬된 리스트에서 Left group이라면 Ly에 Right group이라면 Ry에 저장한다.
    Ly = list()
    Ry = list()
    # 중간점 기준으로 x값에 따라 정렬된 y 값 집합을 나눠주는 것
    for x in ay:
        if x[0] < midpoint:
            Ly.append(x)
        else:
            Ry.append(x)
    print("Lx: ", Lx, "\nLy: ", Ly)
    print("Rx: ", Rx, "\nRy: ", Ry)

    # 영역에 점이 3개 초과라면 다시 영역을 분할작업을 수행한다.
    # 반환 결과로 각 영역의 최근접 쌍 점의 x 좌표들과 거리를 반환한다.
    (p1, q1, mi1) = closest_pair(Lx, Ly)
    (p2, q2, mi2) = closest_pair(Rx, Ry)
    if mi1 <= mi2:
        d = mi1
        mn = (p1, q1)
    else:
        d = mi2
        mn = (p2, q2)
    # 중간영역을 처리하는 부분
    (p3, q3, mi3) = closest_split_pair(ax, ay, d, mn)
    if d <= mi3:
        return mn[0], mn[1], d
    else:
        return p3, q3, mi3

def solution(xarr, yarr):

    a = list(zip(xarr, yarr))           #(x,y) 형식으로 묶어서 관리
    ax = sorted(a, key=lambda x: x[0])  # 묶은 것을 x값 기준으로 정렬한 것, 점들의 중간점을 구하는데 x좌표를 이용
    ay = sorted(a, key=lambda x: x[1])  # 묶은 것을 y값 기준으로 정렬한 것,

    print("ax: ", ax, "\nay: ", ay)

    p1, p2, mi = closest_pair(ax, ay)   # 최근접 쌍의 x좌표와 최단 거리를 반환
    return mi

# 입력
xarr = [3, 8, 4, 11, 6, 6, 5, 1, 11, 10]
yarr = [3, 3, 6, 7, 6, 8, 1, 7, 1, 9]

dist = solution(xarr, yarr)

print("The shortest distance is", dist)


# sort 함수
# 각 원소의 key로 특정한 필터링을 하고 싶다면
# def ft(x):
#   return x[0]
# sorted(a, key = ft) # -> a[i]의 o번째 원소를 정렬에 사용

# 위의 경우를 한 줄로 쓸수는 없을까?
# sorted(a, key = def ft1(x): return x[0]) # -> error case
# sorted(a, key = lambda x: x[0]) # -> anonymous function을 사용해야 한다.

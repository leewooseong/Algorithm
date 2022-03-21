# 부분 집합들을 합하여 전체 집합 만들기
# universe: 전체 집합
# subsets:  전체 집합의 부분 집합
def set_cover (universe, subsets):
    # (e for s in subsets for e in s)은 아래와 같다
    # for s in subsets:
    #   for e in s:
    #       e 리스트 반환
    # elements는 subsets의 원소를 다 가져오며 중복된 원소를 제거한다. universe안의 수가 다 있다면 universe와 동일할 것
    elements = set (e for s in subsets for e in s)
    print("elements 출력: ",elements)

    # elements와 universe가 같지 않다면 집합 커버를 구할 수 없다는 뜻
    if elements != universe:
        return None

    # cover는 받아온 subset들을 저장하는 것
    # covered는 받아온 subset을 set형태로 저장하여 모든 원소를 가져왔는지 확인하는 것
    covered = set()
    cover = []
    while covered != elements:
        # set의 차집합: s1 - s2
        # 부분 집합중에서 찾은 원소를 제외하고(차집합 활용) 가장 원소를 많이 가지고 있는 subsets을 subset에 저장
        subset = max (subsets, key= lambda s:len(s-covered))
        cover.append(subset)
        # 합집합 연산과 동시에 할당
        covered |= subset
    return cover

# 입력
# universe = set(range(6))
# subsets = [set([0,3,4]), set([1,2,3]), set([2,3,4]), set([0,4,5]), set([1,4,5]), set([2,4,5])]
#
#
# cover = set_cover(universe, subsets)
# print("subset에서 선택된 집합들(cover): ",cover)

# 교재 예제
universe = set(range(1,11))
subsets = [set([1, 2, 3, 8]),
           set([1, 2, 3, 4, 8]),
           set([1, 2, 3, 5]),
           set([2, 3, 4, 5, 7, 8]),
           set([4, 5, 6, 7]),
           set([1, 2, 4, 8]),
           set([6, 9]),
           set([10])]
cover = set_cover(universe, subsets)
print("subset에서 선택된 집합들(cover): ",cover)
# 2n개의 배열 입력에 대해 n개의 쌍을 만들어 각 쌍의 최소값의 합이 최대인 경우를 구하는 것

# nums = [1,4,3,2]
nums = [6,2,6,5,1,2]

def arrayPairSum(nums):
    ### 내코드
    # 짝수 인덱스 원소의 합: runtime: 320ms, memory: 15mb, O(n)
    # sum = 0
    # nums.sort()
    # for index, value in enumerate(nums):
    #     if index % 2 == 0:
    #         sum += value
    # return sum

    ### 책풀이

    # 1. 오름차순 풀이: runtime: 330ms, memory: 15mb, O(n)
    # sum = 0
    # pair = []
    # nums.sort()
    #
    # for n in nums:
    #     # 앞에서부터 오름차순으로 페어를 만들어서 합 계산
    #     pair.append(n)
    #     if len(pair) == 2:
    #         sum += min(pair)
    #         pair = []
    # return sum

    # 2. 짝수 번째 값 계산 -> 내코드 풀이와 완전 동일

    # 3. 파이썬 다운 방식: runtime: 284, memory: 15mb, O(n)
    return sum(sorted(nums)[::2])

print(arrayPairSum(nums))
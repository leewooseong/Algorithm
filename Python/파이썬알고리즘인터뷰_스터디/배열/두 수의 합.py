#  덧셈하여 target을 만들 수 있는 배열의 두 숫자 인덱스를 리턴하라
# nums=[2,7,11,15]
# target=9


nums = [3,2,4]
target = 6

def twoSum(nums, target):

    ## 내코드
    # 브루트포스:
    # 속도를 줄이기 위한 filter?
    # 0에 대한 예외 처리를 해주어야 한다... x < target -> x <= target
    # targetList = []
    # for index0 in range(len(nums)):
    #     for index1 in range(len(nums)):
    #         if index0 != index1 and nums[index0] + nums[index1] == target:
    #             targetList.append(index0)
    #             targetList.append(index1)
    #             return targetList
    #         index1 += 1
    #     index0 += 1
    # print("no more numbers")

    ## 책풀이

    # 1. 브루트 포스로 계산: runtime: 3658ms, memory: 14mb, O(n^2)
    # for i in range(len(nums)):
    #     for j in range(i+1, len(nums)):
    #         if nums[i] + nums[j] == target:
    #             return[i,j]

    # 2. in 연산 사용하기: runtime: 783ms, memory: 14mb, O(n^2)
    # for index, value in enumerate(nums):
    #     complement = target - value
    #
    #     if complement in nums[index + 1:]:
    #         return [index, nums[index + 1:].index(complement) + index+1]

    # 3. in 대신 key로 조회하기: : runtime: 51ms, memory: 14mb, O(n)
    # nums_map = {}
    # for index, value in enumerate(nums):
    #     nums_map[value] = index
    # for index, value in enumerate(nums):
    #     complement = target - value
    #     if complement in nums_map and nums_map[complement] != index:
    #         return [index, nums_map[complement]]

    # 4. 조회 구조 개선: runtime: 51ms, memory: 14mb, O(n)
    nums_map = {}
    # 하나의 for 문으로 통합
    for i, num in enumerate(nums):
        if target - num in nums_map:            # 저장을 미리 하지 않았기 때문에 A + B = target이라면 A를 먼저 저장하고 나중에 B 차례가 되면 return되게 된다.
            return [nums_map[target - num], i]
        nums_map[num] = i


print(twoSum(nums, target))
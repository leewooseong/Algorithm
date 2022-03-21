from functools import reduce

nums = [1,2,3,4]

def productExceptSelf(nums):
    ### 내풀이..
    # 너무 어려워.. 못풀어..
    ### 책풀이
    # 왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈

    out = []
    p = 1
    # 왼쪽 곱셈
    # 결과로 [1, nums[0], nums[0] * nums[1], nums[0] * nums[1] * nums[2]]결과를 가진 리스트 out이 생성됨
    for i in range(0, len(nums)):
        out.append(p)
        p = p * nums[i]
    p = 1
    # 왼쪽 곰셈 결과에 오른쪽 값을 차례대로 곱셈
    # 이해가 어렵다면 위 리스트 out에 [nums[3] * nums[2] * nums[1], nums[3] * nums[2], numse[3], 1]인 리스트를 각 원소끼리 곱해줬다고 생각하면 된다.
    # range 함수의 0 - 1에서 막혔다면 range 함수가 지정하는 범위에 대해서 잘 생각해보자
    for i in range(len(nums) - 1, 0 - 1, -1):
        out[i] = out[i] * p
        p = p * nums[i]
    return out


print(productExceptSelf(nums))
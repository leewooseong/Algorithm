nums = [-1,0,1,2,-1,-4]

def threeSum(nums):

    ### ???
    # 1. ?????: ????, O(n^3)
    # triples = []
    # for index0, value0 in enumerate(nums):
    #     for index1, value1 in enumerate(nums[index0 + 1: ]):
    #         if (value0 * -1) + (value1 * -1) in nums[(index0 + 1) + index1 + 1:] and sorted([value0, value1, (value1* -1) + (value0 * -1)]) not in triples:
    #             triples.append(sorted([value0, value1, (value1* -1) + (value0 * -1)]))
    # return triples

    # 2. ? ???: runtime: 8410s, memory: 17mb, O(n^2)
    # triples = []
    # sortedNums = sorted(nums)
    # for first in range(len(sortedNums)):
    #     start = first + 1
    #     end = len(sortedNums) - 1
    #     while(start != end and start <= len(sortedNums)):
    #         if start < end:
    #             if sortedNums[start] + sortedNums[end] < sortedNums[first] * -1 :
    #                 start += 1
    #             elif sortedNums[start] + sortedNums[end] > sortedNums[first] * -1 :
    #                 end -=1
    #         else:
    #             break
    #         if start != end and sortedNums[start] + sortedNums[end] == sortedNums[first] * -1 :
    #             if [sortedNums[first], sortedNums[start], sortedNums[end]] not in triples :
    #                 triples.append([sortedNums[first], sortedNums[start], sortedNums[end]])
    #             start += 1
    # return triples

    ### ???

    # 1. ?????: ????, O(n^3)
    # result = []
    # nums.sort()
    #
    # # ??? ?? n^3 ??
    # for i in range(len(nums) - 2):  #??? 2?? ? ??? ?? ??.. range? ? ?? ?? ??? ?? ?????..
    #     # ??? ? ????
    #     if i > 0 and nums[i] == nums[i - 1]:                # ??? ?? ???? ??? ?????
    #         continue
    #     for j in range(i + 1, len(nums) - 1):
    #         if j > i + 1 and nums[j] == nums[j - 1]:        # ??? j > i + 1 ?? i?? ?? ??? ??? ?????? ??.
    #             continue
    #         for k in range(j + 1, len(nums)):
    #             if k > j + 1 and nums[k] == nums[k - 1]:    # ??? ????
    #                 continue
    #             if nums[i] + nums[j] + nums [k] == 0:
    #                 result.append([nums[i], nums[j], nums[k]])

    # 2. ? ??? ? ??***: runtime: 780s, memory: 17mb, O(n^2)
    results = []
    nums.sort()
    for i in range(len(nums) -2):
        # ??? ? ????
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # ??? ???? ? sum ??
        left, right = i + 1, len(nums) - 1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                # sum = 0? ????? ?? ? ?? ??
                results.append([nums[i], nums[left], nums[right]])

                while left < right and nums[left] == nums[left + 1]:            # i? ?? ?? ??? ??? left? right? ?? ????? ?? ??? ??, ??? ??? ? ??? ?????.
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                # sum = 0? ???? ??? left ?? right ? ? ??? ???? ?? ?? ?? ?? ?? ????. ??? ??? ??? ?? ???? ?? ? ? ?? ??????.
                left += 1
                right -= 1
    return results




print(threeSum(nums))
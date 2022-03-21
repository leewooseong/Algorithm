
height = [0,1,0,2,1,0,1,3,2,1,2,1]

def trap(height):
    ### 내 코드
    # water = 0
    # height_list = [[] for i in range(max(height))]
    # for index, value in enumerate(height):
    #     for i in range(value):
    #         height_list[i].append(index)
    # for i in range(len(height_list)):
    #     if len(height_list[i]) > 1:
    #         for j in range(1, len(height_list[i])):
    #             if  height_list[i][j] - height_list[i][j - 1] != 1:
    #                 water += (height_list[i][j] - height_list[i][j - 1] - 1)
    # return water

    ### 책풀이

    # 2. 투포인터로 최대로 이동
    if not height:
        return 0

    water = 0
    # 왼쪽 끝, 오른쪽 끝
    left, right = 0, len(height) - 1
    # 각 끝 위치의 높이
    left_max, right_max = height[left], height[right]

    # 교차하기 전까지 반복문 진행
    while left < right:
        # 이전 높이와 반복문을 통해 바뀌는 left, right에 해당하는 높이 중 큰 값을 max 값으로 갖는다.
        left_max, right_max = max(height[left], left_max), max(height[right], right_max)
        # 더 높은 쪽을 향해 투 포인터 이동(낮은 쪽이 이동하는 원리 -> ∵ 물이 고이기 위해선 낮은 쪽이 이동해야 최소한 낮은 쪽의 높이까지 물을 모을 수 있다.)
        if left_max <= right_max:
            water += left_max - height[left]
            left += 1
        else:
            water += right_max - height[right]
            right -= 1

    return water

    # 3. 스택 쌓기... 풀이 필요



print(trap(height))
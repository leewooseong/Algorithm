def jobScheduling(jobs):
    # schedule에는 [[M1,e1,ti,ti,...],[M2,ei,ti,ti,...],...] 형태로 저장된다._파이썬이 가독성이 떨어지는 이유.. 없어도 돌아가기 때문에 보기 힘들다
    # 기계 이름과 종료시간, 기계에 할당된 작업들이 표시되는 형태
    schedule = []
    noMachine = 0

    # 시작 시간 기준으로 오름차순 정렬
    L = sorted(jobs)
    while L:
        task = L.pop(0)
        # 발견이 되지 않은 경우로 초기화 = 겹치지 않고 넣을 수 있는 경우가 없다.
        found = False
        # mi[1] = 기계의 종료시간
        for mi in schedule:
            # 들어갈 자리를 찾을 때까지 머신을 돈다.
            if mi[1] <= task[0]:
                # 안겹치면 기계에 일을 추가
                mi.append(task)
                # 종료시간 저장
                mi[1] = task[1]
                # 들어갈 자리를 찾았으면 표시
                found = True
                break
        # 다 돌았는데 들어갈 머신이 없다면
        if not found:
            noMachine += 1
            schedule.append(["Machine" + str(noMachine), task[1], task])
    return schedule

# 정렬이 안된 랜덤한 상태의 job들(시작 시간, 끝나는 시간, task)
jobs = [(7,8,'t1'), (3, 7, 't2'), (1, 5, 't3'), (5, 9, 't4'), (0, 2, 't5'),
        (6,8,'t6'), (1,6,'t7')]
# 정렬하기
schedule = jobScheduling(jobs)
print("The number of used machine is", len(schedule))
print(schedule)

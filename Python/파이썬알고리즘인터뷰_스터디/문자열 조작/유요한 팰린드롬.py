# https://leetcode.com/problems/valid-palindrome/

# words = 'A man, a plan, a canal: Panama'
words = 'race a car'
# words = input()

# 조건 1. 문자열 내에 특수문자 공백을 다 제거해야한다.

# 시나리오
# 1. 첫 번째 문자와 끝 번째 문자를 비교한다.
#   1.1 비교하기 전에 각 문자가 영문자 또는 숫자인지 확인한다.
#   1.2 각 문자를 비교했을 때 문자가 다르다면 False를 반환한다.
# 2. start_index와 end_index가 교차할 때까지 이 방법을 진행한다.

def identify_palindrome(s):
    # 내 코드
    # s = s.upper()
    # start_index = 0
    # end_index = len(s) - 1
    # while (start_index < end_index):
    #     start_word = s[start_index]
    #     end_word = s[end_index]
    #     # 시작, 끝 모두 문자가 특수문자가 아니라면
    #     if start_word.isalnum() and end_word.isalnum():
    #         if end_word.isalnum():
    #             if (start_word != end_word):
    #                 return False
    #         end_index -= 1
    #         start_index += 1
    #     if not end_word.isalnum():
    #         end_index -= 1
    #     if not start_word.isalnum():
    #         start_index += 1
    # return True

    # 1. 리스트 형태의 문제 해결
    str = []
    for char in s:
        if char.isalnum():
            str.append(char.lower())

    length = len(str)
    print(str)
    print(length)
    while (len(str) > 1):
        if str.pop(0) != str.pop():
            return False
    return True

print(identify_palindrome(words))
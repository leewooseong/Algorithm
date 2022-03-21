# 문제: 가장 긴 팰린드롬을 출력하라
import collections

# words = "cbbd"
words = "babad"

# 1. 단어에서 팰린드롬을 찾아야함. 긴 단어부터 팰린드롬이 있는지 검사
# 2. 긴단어에서 한 단어씩 잘라가면서 안에 있는지 검사
#   2.1 [start:start + word length] start를 1씩 증가


def longestPalindrome(strs):
    longest_palindrome = ""

    for length in range(len(strs), 0, -1):
        for start in range(len(strs)):
            if start + length <= len(strs):
                palindrome = strs[start : start + length]
                if palindrome[::-1] == palindrome:
                    longest_palindrome = palindrome
                    return longest_palindrome
    return longest_palindrome

print(longestPalindrome(words))
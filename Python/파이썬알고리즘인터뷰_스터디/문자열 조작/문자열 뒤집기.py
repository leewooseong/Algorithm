
str = ["h","e","l","l","o"]

def reverseString(s):
    # s_reverser = s[::-1]
    # for index, char in enumerate(s_reverser):
    #     s[index] = char
    s[:] = s[::-1]

reverseString(str)
print(str)
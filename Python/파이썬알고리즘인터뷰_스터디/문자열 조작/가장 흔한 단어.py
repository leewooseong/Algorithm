import re

# paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
# banned = ["hit"]
paragraph = "a, a, a, a, b,b,b,c, c"
banned = ["a"]

def mostCommonWord(paragraph, banned):
    frequency_list = {}
    #  코드 밑에서 upper 함수를 쓰는 건 보기도 어렵고 나눠지는 케이스 마다 다시 upper를 적용시켜줘야할 수 있다. 전체에 필요한 작업은 위에서 한번 작업해주고 넘어가는게 좋다.
    paragraph = paragraph.lower()
    paragraph = re.sub('[^a-z]',' ',paragraph)
    for x in paragraph.split(" "):
        if x not in frequency_list and x not in banned and x:
            frequency_list[x] = 1
        elif x in frequency_list:
            frequency_list[x] += 1;

    return max(frequency_list.keys(),key=lambda k: frequency_list[k])
    return None

print(mostCommonWord(paragraph, banned))
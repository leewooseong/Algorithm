import collections

# words = ["eat", "tea", "tan", "ate", "nat", "bat"]
words = ["cab","pug","pei","nay","ron","rae","ems","ida","mes"]

# 1. 결과는 2차원 리스트로 반환한다.
# 2. (책 방법.. 봐버렷다..) 정렬을 이용해서 문제를 해결
# 3. 리스트 컴프리헨션을 이용? 한 개씩

def groupAnagrams(strs):
    # defaultdict()안에는 자료형을 넣어줄 것!
    anagrams = collections.defaultdict(list)

    # 단어별로 abc 순으로 정렬하여 리스트 형태로 반환, 반환된 리스트를 공백없이 다시 단어로 join(결합) -> 정렬된 단어를 key로 사용
    # 결국 같은 key를 가지는 단어들의 원본(정렬되지 않은 상태)을
    for word in strs:
        anagrams[''.join(sorted(word))].append(word)
    print(anagrams)
    # return None
    return list(anagrams.values())

print(groupAnagrams(words))

# 내코드_실패
# def groupAnagrams (strs):
#     output = []
#     for word in strs:
#         if len(output) > 0 :
#             # 같은 단어인지 판별하는 logic & 은 단어를 같은 배열에 넣어주는 logic
#             for output_word in output:
#                 i_word = collections.Counter(word)
#                 o_word = collections.Counter(output_word[0])
#                 if i_word == o_word:
#                     output_word.append(word)
#                     break
#                 else:
#                     if output[len(output) - 1][0] == output_word[0]:
#                         output.append([word])
#                         break
#         else :
#             output.append([word])
#     return output
#
#
# print(groupAnagrams(words))
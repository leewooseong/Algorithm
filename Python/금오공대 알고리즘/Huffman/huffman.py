# 공부할 때 다시봐야할 부분이 많다.

import heapq

def encode(frequency):
    # dictionary의 경우 dictionary.items()라는 메소드를 사용해서 뽑아낼 수 있다.
    # [weight, [symbol, 'binary code']]
    heap = [[weight, [symbol, '']] for symbol, weight in frequency.items()]
    # ????? _ min heap으로 만들어줌
    heapq.heapify(heap)
    while len(heap) > 1:
        # 제일 작은 2개의 값을 뽑아냄
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        # 트리상 작은 값이 왼쪽에 위치 -> binary code 부분에 0을 넣어줌
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        # 트리상 큰 값이 오른쪽에 위치 -> binary code 부분에 1을 넣어줌
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        # 새로운 노드를 생성하여 heap에 넣어준다.
        # [550], ['A','0'], ['B','1']
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    return sorted(heapq.heappop(heap)[1:], key=lambda p: (len(p[-1]),p))


input = ['add', 'fasd', 'dfa', 'ass', 'dd', 'fd', 'aas', 'fdd', 'dfaas', 'df', 'dfff', 'sdgg', 'fsgsas']
alphabet = [0 for i in range(26)]

for word in input:
    length = len(word)
    while length > 0:
        alphabet[ord(word[-1]) - 97] += 1
        word = word[:-1]
        length -= 1

print(alphabet)
frequency = dict();

for index in range(26):
    if(alphabet[index] > 0):
        frequency[chr(index+97)] = alphabet[index]

print(frequency)

huff = encode(frequency)
print("Symbol".ljust(10) + "Weight".ljust(10) + "Huffman Code")
for p in huff:
    print(p[0].ljust(10) + str(frequency[p[0]]).ljust(10) + p[1])

afterWeight = 0
beforeWeight = 44

for p in huff:
    afterWeight += len(p[1]) * frequency[p[0]]

print('afterWeight: ', afterWeight)
print('압축률: ', beforeWeight / afterWeight * 100)
print('\n')

binarycode = []
for word in input:
    length = len(word)
    while length > 0:
        for i in range(len(huff)):
            if word[0] in huff[i][0]:
                binarycode.append(huff[i][1])
                print(huff[i][1], end='')
        length -= 1
        word = word[1:]
print('\n')
print('바이너리 코드: ', binarycode)

print('\n')
asciicode = []
for j in range(len(binarycode)):
    for i in range(len(huff)):
        if binarycode[j] in huff[i][1]:
            asciicode.append(huff[i][0])
            print(huff[i][0], end='')

print('\n')
print('아스키 코드: ', asciicode)

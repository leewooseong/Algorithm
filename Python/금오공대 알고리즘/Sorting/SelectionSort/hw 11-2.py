
input = [5, 8, 1, 2, 0, 6, 9, 3, 7, 4]

def SelectionSort(input):
    length = len(input)
    for i in range(length-1):
        min = i
        for j in range(i+1, length):
            if input[min] > input[j]:
                min = j
        input[min], input[i] = input[i], input[min]
        print(input)
SelectionSort(input)

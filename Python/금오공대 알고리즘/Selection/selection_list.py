import random

def partition(A):
    less = []
    equal = []
    greater = []
    pivot = A[random.randrange(0, len(A))]
    for x in A:
        if x < pivot:
            less.append(x)
        elif x == pivot:
            equal.append(x)
        else:
            greater.append(x)
    return less, equal, greater

def selection(A, k):
    less, equal, greater = partition(A)
    if k <= len(less):
        return selection(less, k)
    elif k <= len(less) + len(equal):
        return equal[0]
    else:
        return selection(greater, k-len(less) - len(equal))

A = [6, 3, 11, 9, 12, 2, 8, 15, 18, 10, 7, 14]
data = selection(A, 7)
print(data)

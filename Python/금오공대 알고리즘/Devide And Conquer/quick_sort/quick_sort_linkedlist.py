import random

def qsort(A):
    less = []
    equal = []
    greater = []
    if len(A) > 1:
        pivot = A[random.randrange(0, len(A))]
        for x in A:
            if x < pivot:
                less.append(x)
            elif x == pivot:
                equal.append(x)
            else:
                greater.append(x)
        return qsort(less) + equal + qsort(greater)
    else:
        return A

A = [6, 3, 11, 9, 12, 2, 8, 15, 18, 10, 7 ,14]
B = qsort(A)
print(B)
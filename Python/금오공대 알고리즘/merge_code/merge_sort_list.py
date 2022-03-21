def merge(arra, arrb):
    arrc = []
    while arra and arrb:
        elea = arra.pop(0)
        eleb = arrb.pop(0)
        if elea < eleb:
            arrc.append(elea)
            arrb.insert(0, eleb)
        elif elea > eleb:
            arrc.append(eleb)
            arra.insert(0, elea)
        else:
            arrc.append(elea)
            arrc.append(eleb)

    return arrc + arra + arrb

def mergeSort(arra):
    if(len(arra) > 1):
        k = (len(arra) - 1) // 2
        return merge(
            mergeSort(arra[:k+1]),
            mergeSort(arra[k+1:])
        )
    return arra

alist = [4, 26, 9, 3, 1, 72, 56, 6, 43]
blist = mergeSort(alist)
print(blist)

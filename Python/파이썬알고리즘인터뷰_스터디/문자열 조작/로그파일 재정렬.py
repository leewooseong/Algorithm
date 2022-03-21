logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]


def reorderLogFiles(logs):
    """
    :type logs: List[str]
    :rtype: List[str]
    """
    letters, digits = [], []
    for log in logs:
        if log.split(' ')[1].isalpha():
            letters.append(log)
        else:
            digits.append(log)

    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    return letters + digits

print(reorderLogFiles(logs))

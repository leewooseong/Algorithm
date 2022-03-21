# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


a, b = input("두 수를 입력해주세요: ").split()
a = int(a)
b = int(b)

def Euclid(a, b):
   if (b == 0):
       return a
   return Euclid(b, a % b)

print("최대 공약수:", Euclid(a, b))

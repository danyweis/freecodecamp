# print numbers from 1 - 100
# if num / 3 = 0 print fizz
# if num / 5 = 0 print buzz
# if num / 3 and 5 = 0 print fizzbuzz

num = 1

while num != 100:
    if num % 3 == 0 and num % 5 == 0:
        print('FizzBuzz')
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)
    num += 1

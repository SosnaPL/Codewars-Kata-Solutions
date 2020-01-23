'''
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(divided_by(three()))
'''
def zero(number = []):
    x = 0
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def one(number = []):
    x = 1
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def two(number = []):
    x = 2
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def three(number = []):
    x = 3
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def four(number = []):
    x = 4
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def five(number = []):
    x = 5
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def six(number = []):
    x = 6
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def seven(number = []):
    x = 7
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def eight(number = []):
    x = 8
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def nine(number = []):
    x = 9
    if len(number) < 2:
        return x
    else:
        if number[1] == 0:
            return x + number[0]
        elif number[1] == 1:
            return x - number[0]
        elif number[1] == 2:
            return x * number[0]
        elif number[1] == 3:
            return int(x/number[0])
def plus(number):
    return [number, 0]
def minus(number):
    return [number, 1]
def times(number):
    return [number, 2]
def divided_by(number):
    return [number, 3]
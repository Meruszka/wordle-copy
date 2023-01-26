import random

toFile = []

with open('pl.txt') as f:
    lines = f.readlines()
    for i in range(100):
        toFile.append(random.choice(lines))
    f.close()

with open('plR.txt', 'w') as f:
    f.write('[')
    for line in toFile:
        f.write('\'' + line.strip() + '\',')
    f.write(']')
    f.close()

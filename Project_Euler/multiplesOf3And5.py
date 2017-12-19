def multiples():
  total = 0
  for i in range(0,1000,3):
    total = total + i
  for l in range(0,1000,5):
    if l % 3 != 0:
      total = total + l
  return total

print(multiples())

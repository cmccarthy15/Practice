def root(x, n):
  high = float(x)
  low = 0.0
  while 1:
    mid = (high + low) / 2
    if abs(x - pow(mid, n)) <= 0.001:
      return round(mid, 3)
    elif x > pow(mid, n):
      low = mid
    else:
      high = mid


print(root(27, 3), 'should be 3') # 3
print(root(7, 3), 'should be 1.93') # 1.93
print(root(9, 2), 'should be 3') # 3
print(root(16, 4), 'should be 2') # 2
print(root(10, 3), 'should be 2.154') # 2.154
print(root(160, 3), 'should be 5.429') # 5.429

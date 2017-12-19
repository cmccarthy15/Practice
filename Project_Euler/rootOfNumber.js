/*
In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Constraints:
[time limit] 5000ms
[input] float x
0 ≤ x
[input] integer n
0 < n
[output] float

consider space and time complexity
*/

function root(x, n) {
  // your code goes here
  let found = false;
  let top = x;
  let bottom = 0;
  let middle, calculated;
  while (!found) {
    middle = (top + bottom) / 2
    calculated = (Math.pow(middle, n))
    if (Math.abs(x - calculated) <= 0.001) { found = true }
    else {
      x - calculated > 0 ? bottom = middle : top = middle;
    }
  }
  return Math.round(middle * 1000) / 1000
  //return middle.toFixed(3);
}

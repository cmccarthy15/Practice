/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


/*  this version works for any two numbers  */
function sumUpTo1000(n1, n2){
  let total = 0;
  for(let i = 0; i < 1000; i += n1){
    total += i;
  }
  for(let l = 0; l < 1000; l += n2){
    if(l % n1 !== 0){ total += l }
  }
  return total;
}

console.log('------ VERSION ONE -------')
console.log(sumUpTo1000(3,5))
// console.log('only three', sumUpTo1000(3, 0)) // only three 166833
// console.log('only five', sumUpTo1000(5, 0)) // only five 99500

console.log('------ VERSION TWO -------')

function sumUnder(line, num){
  // take out the -1 to make it inclusive of the number
  let numMultiples = Math.floor(((line - 1) / num));
  let maxMult = Math.floor((line - 1) / num) * num;
  return Math.floor((numMultiples * ((numMultiples * num) + num)) / 2)
}

function sumUpAlgebraic(line, num1, num2){
  let total = 0;
  total += sumUnder(line, num1);
  total += sumUnder(line, num2);
  total -= sumUnder(line, num1 * num2);
  return total

}
console.log(sumUpAlgebraic(1000, 3, 5))

/*
330(990 + 3) / 2
((line / num)*(line + num))/2

*/

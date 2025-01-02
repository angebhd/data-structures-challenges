function solution(number){
  let arr = []
  for(let i = 3; i< number; i++)
    if (i%3 === 0 || i%5 ==0 ) arr.push(i);
  if (arr.length === 0) return 0
  let sum = arr.reduce((sum, el) => sum+el);
  return sum
}
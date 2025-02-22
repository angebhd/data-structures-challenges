# 6kyu - [Two cube sums](https://www.codewars.com/kata/55fd4919ce2a1d7c0d0000f3)

Create a function which checks if a given number n can be written as the sum of two cubes in two different ways:

n=a3+b3=c3+d3n = a^3+b^3 = c^3+d^3n=a3+b3=c3+d3

All the numbers a, b, c and d should be different and greater than 0.
Example:
```java
1729 --> true   
// 1729 = 9³ + 10³ = 1³ + 12³

42   --> false  
// cannot be expressed as the sum of two cubes in 2 different ways
```

## Solution
```javascript
function hasTwoCubeSums(n) {
    let two = 0
    
    let numbers = []
    main:for(i=1; i< n;i++){
      second:for(j=1; j< n;j++){
        const a = i**3 + j**3;
        if(two > 1) return true
        if (a == n) {
          for (let t =0 ; t<numbers.length; t++){
            if (numbers[t] == i) continue main;
            if (numbers[t] == j) continue second; 
          }
          numbers.push(i, j);
          two++;
        }
        if (i**3 > n) break main;
        if (a > n) continue main;
      }
    }
    return false
  }
```
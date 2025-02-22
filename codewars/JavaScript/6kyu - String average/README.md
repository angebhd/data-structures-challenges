# String average

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

[Vowel consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

## Solution

```javascript
function averageString(str) {
  // Code away
  const myMap = new Map();
  const myArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  
  myMap.set("zero", 0);
  myMap.set("one", 1);
  myMap.set("two", 2);
  myMap.set("three", 3);
  myMap.set("four", 4);
  myMap.set("five", 5);
  myMap.set("six", 6);
  myMap.set("seven", 7);
  myMap.set("eight", 8);
  myMap.set("nine", 9);
  
  const numbers = str.split(" ");
  if(numbers.length < 1) return "n/a";
  
  let sum = 0;
  for (let a in numbers){
    if(!myMap.has(numbers[a])) return "n/a";
   
    sum += myMap.get(numbers[a]);
  }
  return myArray[Math.floor(sum/(numbers.length))];
  
}
```

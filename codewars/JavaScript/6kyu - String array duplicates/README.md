# 6kyu - [String array duplicates](https://www.codewars.com/kata/59f08f89a5e129c543000069)

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

[Vowel consonant lexicon](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

## Solution

```javascript
function dup(s) {
  
  const res = [];
  for (let i =0; i< s.length; i++){
    let word = s[i][0]
    for(let j =1; j< s[i].length; j++){
      
      if(word.at(-1) == s[i][j]) continue;
      word += s[i][j];
    }
    res.push(word)
  }
return res;
};
```

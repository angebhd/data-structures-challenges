# Are we alternate?

Task

Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples 
```
"amazon" --> true
"apple" --> false
"banana" --> true
```
**Note** 

    Arguments consist of only lowercase letters.


## Solution

```javascript
function isAlt(word) {  
  const vowels = new Map();
  vowels.set("a", true);
  vowels.set("e", true);
  vowels.set("i", true);
  vowels.set("o", true);
  vowels.set("u", true);
  
  let last = vowels.has(word[0]) ? "v" : "c";
  for (let a=1; a< word.length; a++){
    const current = vowels.has(word[a]) ? "v" : "c";
    
    if(last === current)
      return false;
    
    last = current;
  }
  
  return true;
}
```
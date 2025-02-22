# Sort Arrays (Ignoring Case)

Sort the given array of strings in alphabetical order, case insensitive. For example:
```
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
```

## Solution

```javascript
function sortme(names){
    return names.sort((a,b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a > b) return 1;
      if (a < b) return -1;
      
      return 0;
    }); 
  }
```

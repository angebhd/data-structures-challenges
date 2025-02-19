# Urban Dictionary

Design a data structure that supports the following two operations:

- addWord / add_word which adds a word,
- search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter. Return true if the search term fully matches any word previously added; otherwise, return false.

You may assume that all given words contain only lowercase letters.
Examples:
```javascript
addWord("bad")
addWord("dad")
addWord("mad")

search("pad") === false
search("bad") === true
search(".ad") === true
search("b..") === true
```
- **Note**: the data structure will be initialized multiple times during the tests!

## Solution

```javascript
var WordDictionary = function () {
   WordDictionary.words = [];
};

WordDictionary.prototype.addWord = function (word) {
  WordDictionary.words.push(word);
};

WordDictionary.prototype.search = function (word) {
  main:for (let wo of WordDictionary.words){
    if(wo.length !== word.length) continue;
    for (let i =0; i<= wo.length; i++){
      if(word[i] === ".") continue
      if(wo[i] !== word[i] ) continue main;
      if(i == wo.length) return true
    }
  }
  return false
};
```


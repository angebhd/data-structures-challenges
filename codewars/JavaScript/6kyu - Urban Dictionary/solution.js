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
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
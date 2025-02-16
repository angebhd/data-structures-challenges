function rot13(str) {
    const rotChar = ["a", "b","c","d","e","f","g","h","i","j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    
    let value = "";
    
    for (let a=0; a<str.length; a++){
      if(!rotChar.includes(str[a].toLowerCase())){
         value+=str[a]
         }else{
           if(str[a].toLowerCase() > "m"){
              value+= String.fromCharCode(str.charCodeAt(a)-13)
           }else{
              value+= String.fromCharCode(str.charCodeAt(a)+13)
  
           }
         }
    }
  return value;
  
  }
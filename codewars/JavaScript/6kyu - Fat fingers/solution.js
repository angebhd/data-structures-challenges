var fatFingers = function(str) {
  console.log("input: ",str)
  if (str == null) return null;
  if (!str) return "";
  
//   let res = str[0] == 'a' ? "": str[0].toUpperCase();
  let res= ""
  let caps = false;
  for (let i = 0; i< str.length ; i++){
    if (str[i] == "a" || str[i] == "A" ){
      caps = caps ? false : true;
      continue
    }
    
    if (caps){
      if (str[i] === str[i].toUpperCase()){
        res += str[i].toLowerCase();
      continue
      }
        

      res += str[i].toUpperCase();
      continue
    }
    res+=str[i]
  }
  console.log("res: ",res)
  return res
};
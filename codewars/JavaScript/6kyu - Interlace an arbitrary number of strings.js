function combineStrings(...args) {
  
  console.log(args) 
  let res = ""
   let cont = true;
    let count = 0;
    while (cont){
      const length = res.length
      for (let i =0; i< args.length; i++){
        if (args[i][count] !== undefined)
          res+= args[i][count];
    }
      count ++
      if (length === res.length)
        cont = false;
   
  }
  return res;
}
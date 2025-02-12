function groupIn10s(...a) {
  const res = []
  a = a.sort((a,b) => a-b);
  console.log(a)

  for (let i=0; i< a.length; i++){
    
    const ind = Math.floor(a[i]/10);
    if(res[ind] == null){
      res[ind] = [a[i]];
    }else{
      res[ind].push(a[i])
    }
    
  }
  const resp = []
  console.log(res.flat())
//   for (let j=0; j<res.length;j++){
//     resp.push(res[j].sort((a,b)=> a-b))
//   }
  return res;
  
}
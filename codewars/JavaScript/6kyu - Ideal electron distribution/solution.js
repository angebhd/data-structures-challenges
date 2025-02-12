function atomicNumber(num){
  //"What are we doing today, Brain?" "The same thing we did last week, Pinky... Take over the CodeWars"
  const res = [];
  let shell = 1;
  while (num > 0){
    
    const electron = 2 * shell**2
    if (num > electron ){
    res.push(electron);
    num = num - (2 * shell**2)
    }else{
    res.push(num);
    num = num - num
    }
    shell++;
  }
  return res
}
function add(a, b) {
  
  let num1 = a.split("");
  let num2 = b.split("")
  
  // Getting the greatest length
  let length = num1.length
  if (num2.length > num1.length) length = num2.length;
  
  // make sure all the two numbers have the same length
  while (num1.length < length)
    num1.unshift(0);
  
  while(num2.length < length)
    num2.unshift(0)
  //initializi the remaining and reuslt respectively to 0 and empy array
  let rem = 0
  let res = [];
  // Performing the addition
  for (let i = length-1; i>=0 ; i--){
    let sum = Number(num1[i]) + Number(num2[i])+ Number(rem)
    rem = 0
    //if the sum has two digit extract teh reamining
    if (sum >= 10){
      rem = +sum.toString()[0];
      sum = sum.toString()[1];
    }
    res.unshift(sum)
  }
  if (rem > 0 )
    res.unshift(rem);
  
  return res.join("");
}
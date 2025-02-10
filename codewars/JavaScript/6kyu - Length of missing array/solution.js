function getLengthOfMissingArray(arrayOfArrays) {
  // Checking if the array of array is empty or null
  if (arrayOfArrays == null || arrayOfArrays.length == 0)return 0
  
  // checking if the elemetnts of the array are empty os null
  for (let a = 0; a<arrayOfArrays.length; a++)
      if(arrayOfArrays[a] == null || arrayOfArrays[a].length == 0)
        return 0;
// Sorting the arrar
  const sortedArray = arrayOfArrays.sort((a,b) => - a.length + b.length )

  //searching for the missing length 
  for (let i = 1 ; i<sortedArray.length ; i++){
    if (sortedArray[i-1].length-sortedArray[i].length !== 1) return sortedArray[i].length +1
    
  }

  return 0
}

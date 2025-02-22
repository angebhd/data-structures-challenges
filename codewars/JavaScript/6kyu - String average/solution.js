function averageString(str) {
    // Code away
    const myMap = new Map();
    const myArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    myMap.set("zero", 0);
    myMap.set("one", 1);
    myMap.set("two", 2);
    myMap.set("three", 3);
    myMap.set("four", 4);
    myMap.set("five", 5);
    myMap.set("six", 6);
    myMap.set("seven", 7);
    myMap.set("eight", 8);
    myMap.set("nine", 9);
    
    
    const numbers = str.split(" ");
    if(numbers.length < 1) return "n/a";
    
    let sum = 0;
    for (let a in numbers){
      if(!myMap.has(numbers[a])) return "n/a";
     
      sum += myMap.get(numbers[a]);
    }
    return myArray[Math.floor(sum/(numbers.length))];
    
  }
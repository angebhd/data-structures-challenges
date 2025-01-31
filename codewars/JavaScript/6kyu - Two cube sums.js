function hasTwoCubeSums(n) {
    let two = 0
    
    let numbers = []
    main:for(i=1; i< n;i++){
      second:for(j=1; j< n;j++){
        const a = i**3 + j**3;
        if(two > 1) return true
        if (a == n) {
          for (let t =0 ; t<numbers.length; t++){
            if (numbers[t] == i) continue main;
            if (numbers[t] == j) continue second; 
          }
          numbers.push(i, j);
          two++;
        }
        if (i**3 > n) break main;
        if (a > n) continue main;
      }
    }
    return false
  }
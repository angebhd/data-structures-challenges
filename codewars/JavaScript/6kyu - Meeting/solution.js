function meeting(s) {
    //   const people = s.split(";").map( e => e.split(":").join(", ").toUpperCase().split().unshift("(").push(")").join(","));
      let people = s.split(";").map( e => e.split(":").reverse().join(", ").toUpperCase());
      people = people.sort();
      const res = [];
      for(let i= 0; i< people.length; i++)
        res.push("(" + people[i] + ")");
      
      return res.join("") 
      
    }
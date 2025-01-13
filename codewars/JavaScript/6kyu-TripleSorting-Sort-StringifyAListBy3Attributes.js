function sort(students) {  
  const stud = students.sort((a,b) => {
    if(a.gpa < b.gpa){
      return 1;
    }else if(a.gpa > b.gpa){
      return -1
    }else{
      if(a.fullName.split(" ")[1][0] > b.fullName.split(" ")[1][0]){
        return 1
      }else if  (a.fullName.split(" ")[1][0] < b.fullName.split(" ")[1][0] ){
        return -1
      }else {
        return a.age - b.age
      }
    }
  })  
  let res = ""
  for (let i = 0; i < stud.length; i++)
    res+= stud[i].fullName + ",";
  
  
  return res.slice(0,-1);
};
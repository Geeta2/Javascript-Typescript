let a={Status:"Pass"};
let b=a; //copy the reference
b.Status="Fail";
console.log(a.Status);
console.log(b.Status);
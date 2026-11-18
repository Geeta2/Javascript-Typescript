let original=[1,2,3];

let cop1=[...original];
let cop2=original.slice();
cop2.push(92);
cop1.push(93);
console.log(original);
console.log(cop1);
console.log(cop2);

//deep copy array
let deep_copy_Array=original;

deep_copy_Array.push(91);
console.log(original);
console.log(deep_copy_Array);

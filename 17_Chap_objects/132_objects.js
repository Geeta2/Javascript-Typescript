let a={
    name:"Geeta"
};

let a1={status:"Pass"};

console.log(a.name);
console.log(a["name"]);

console.log(a1);
console.log(a1.status);


// keys are case sensitive.
let a2={status:"Pass",Status:"Fail"};
console.log(a2.status);
console.log(a2.Status);
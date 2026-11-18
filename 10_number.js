// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS


let decimal =45;
console.log("Decimal",decimal);


let binary=0b1010;
console.log("Binary",binary);

let octal=0o52;
console.log("Octal",octal);

let hex=0x2A;
console.log("hex",hex);

//2- Floating point literals

let float1=56.333;
let float2=-0.5;
let float3=.5;
let float4=5.;

console.log(float1);
console.log(float2);
console.log(float3);
console.log(float4);

//3- Exponential notation

let exp1=1.5e3;  //1.5*10^3
let exp2=1.5e-3;  //1.5*10^-3
let exp3=2E10;  //2*10^10

console.log(exp1);
console.log(exp2);
console.log(exp3);
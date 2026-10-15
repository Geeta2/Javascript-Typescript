let responsetime=850;
let sla=1000;
let slastatus=responsetime<=sla ? "Within sla" : "sla breached";

console.log(`Response: ${responsetime}ms - ${slastatus}`);

//Temple literal
console.log(`what is sla time? - ${sla}`);
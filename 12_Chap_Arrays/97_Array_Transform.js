//Map and Filters

//every vs some

//every-ALL must pass
console.log([80,90,85].every(i=>i>=70));
console.log([80,60,65].every(i=>i>=70));

//some->Atleast ONE must pass
console.log([80,60,85].some(s=>s<70));
console.log([80,90,85].some(s=>s<70));

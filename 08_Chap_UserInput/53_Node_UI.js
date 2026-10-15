const readline=require('readline');

const r1=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.question("enter a num:", (input)=>
{
let num=Number(input);

if(num%2===0)
{
    console.log(num + "Is Even");
}
else{
    console.log(num + "is odd");
}
r1.close();
});
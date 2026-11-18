let arr=[10,5,6,9,10];
const seen=new Set();

const duplicates=new Set();

for(let i=0; i<arr.length; i++)
{
    if(seen.has(arr[i]))
    {
        duplicates.add(arr[i]);
    }
    else
    {
        seen.add(arr[i]);

    }
}

if(duplicates.size===0)
{
    console.log("No duplicates found");

}
else{
    console.log([...duplicates].join(" "));
}
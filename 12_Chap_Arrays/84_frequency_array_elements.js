let arr=[10,10,2,2,6,6,3,3,3,3];

let frequency={};
for(let i=0;i<arr.length;i++)
{
    if(frequency[arr[i]])
    {
        frequency[arr[i]]++;
    }
    else
        frequency[arr[i]]=1;
}

for(const element in frequency)
{
    console.log(`${element} appears ${frequency[element]} times`);
}
let arr=[10,2,1,0,63];

let small=arr[0];

for(let i=0; i<arr.length;i++)
{
    if(arr[i]<small)
    {
        small=arr[i];
    }
}

console.log(small);
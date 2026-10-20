let arr=[1,2,3];
console.log(arr);

//Add to END
arr.push(8);
console.log(arr);

//Remove from end
arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

//Remove from beginning
arr.shift();
console.log(arr);

//splice [ 1, 2, 3, 5, 6 ]
arr.splice(2,1); //2->index, 1->how many to to delete
console.log(arr);
//o/p [ 1, 2, 5, 6 ]

arr.splice(2,0,99) //[ 1, 2, 5, 6 ] //2->index, 0->nothing to delete, 99 ->add 
console.log(arr); //o/p [ 1, 2, 99, 5, 6 ]


// [ 1, 2, 99, 5, 6 ]
arr.splice(1,2,10,20); // 1 ->index, 2->how many elements to be removed, 10,20 ->no's to add
console.log(arr) //o/p [ 1, 10, 20, 5, 6 ]
function greet(name)
{
    return `Hello, ${name}`;
}

const greet1= function(name)
{
    return `Heello, ${name}`;
}

//Arrow Function
const greet2= (name2)=>`Hello ${name2}`;

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

    console.log(greet("Geeta"));
    console.log(greet1("Raksha"));
    console.log(greet2("mine"));
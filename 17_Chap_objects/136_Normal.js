const user={
    name:"John",
    age:30,
    email:"abc@gmail.com"
};

console.log(user);

console.log(user.name);
console.log(user.age);

console.log(user["age"]);

//adding/modyfying properties
user.city="Hubli";
user.age=40;

console.log(user);
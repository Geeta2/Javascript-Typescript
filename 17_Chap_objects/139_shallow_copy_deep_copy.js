// 1. Call by reference: one object, two names
let a={status:"pass"};
let b=a;
b.status="fail";
console.log(a.status); //fail a changed too !

// 2. Shallow copy (...spread): new object, but the inner object is shared
let user1={name:"pramod", address:{city:"Delhi"}};
let cop1={...user1};
cop1.name="Geeta";
cop1.address.city="hubli";
console.log(user1.name);
console.log(user1.address.city);

// 3. Deep copy (structuredClone): everything is new
let user2 = { name: "Pramod", address: { city: "Delhi" } };
let cop2=structuredClone(user2);
cop2.name="geeta";
cop2.address.city="hubli";
console.log(user2.name);
console.log(user2.address.city);
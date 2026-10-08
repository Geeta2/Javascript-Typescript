JavaScript: Keywords vs Identifiers
1. Keywords

Keywords are reserved words in JavaScript that have a special meaning to the language.

Examples:

let name = "Geeta";
const age = 30;

if (age > 18) {
    console.log("Adult");
}

Here:

let → keyword
const → keyword
if → keyword

Other common JavaScript keywords:

let
const
var
if
else
for
while
function
return
class
new
this
try
catch
throw
async
await
import
export

You generally cannot use these reserved words as variable/function names.

❌ Wrong:

let = 10;
2. Identifiers

Identifiers are the names we give to things in our JavaScript code, such as variables, functions, classes, etc.

Example:

let username = "Geeta";
const age = 30;

function loginUser() {
    console.log("Login");
}

Here:

username → identifier
age → identifier
loginUser → identifier

Think:

Keyword = tells JavaScript what to do
Identifier = name given by the programmer

Simple example
const salary = 50000;

const → keyword
salary → identifier
50000 → value

Identifier naming rules

Valid:

let userName;
let user1;
let _count;
let $price;

Invalid:

let 1user;     // ❌ cannot start with number
let user-name; // ❌ hyphen is not allowed
let const;     // ❌ const is a keyword
Interview answer

If they ask "What is the difference between keywords and identifiers in JavaScript?", say:

Keywords are reserved words with a predefined meaning in JavaScript, such as let, const, if, and function. Identifiers are names created by the programmer for variables, functions, classes, and other entities, such as username, age, and loginUser.
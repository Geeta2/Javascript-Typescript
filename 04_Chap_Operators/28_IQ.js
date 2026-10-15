let statusCode=404;

let category=
statusCode<300 ? "Success":
statusCode<400 ? "Redirect" :
statusCode<500 ? "Client error" : "Server error";

console.log(`status ${statusCode}: ${category}`);
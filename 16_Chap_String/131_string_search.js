//searching and checking
 let url = "https://staging.vwo.com/api/login?retry=true";

 url.includes("staging");
 url.includes("production");

 //startswith/endswith

 url.startsWith("https");
 url.startsWith("https://");
 url.endsWith("true");

 //indexof / lastIndexOf
 console.log(url.indexOf("a"));
 console.log(url.lastIndexOf("a"));
 console.log(url.indexOf("nothere"));
 
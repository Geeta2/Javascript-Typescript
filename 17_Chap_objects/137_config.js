let config={};

console.log(config);

config.browser="chrome";
config.timeout=3000;
console.log(config);
config.timeout=5000; //latest

console.log(config);

delete config.browser;
console.log(config);
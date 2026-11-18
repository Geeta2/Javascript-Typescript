//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name()
{
    console.log("Hi");
} name();


(function()
{
    console.log("Hello,anonymous function");
}) ();

(function()
{
    console.log("staging");
}) ();

(()=>{
    console.log("Setup complete");
}) ();
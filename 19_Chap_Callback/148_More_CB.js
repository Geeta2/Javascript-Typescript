function test(item,callMeWhenDone)
{
    console.log("Hi start the TestCase", item);
    callMeWhenDone();
}

test("verify the login page is working", async({page})=>
{

});
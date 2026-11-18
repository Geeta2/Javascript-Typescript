function placeOrder(item,callback)
{
    console.log("Placing an order");
    console.log("Order Placed",item);
    callback();

}


//first way
/*
function CompleteOrderPrint()
{
    console.log("Normal function");
}*/

//placeOrder("Burger",CompleteOrderPrint);

//Second way Anonymous function
placeOrder("Burger",function(){
    console.log("Order is ready!pick it up!");
});

//Third way-Arrow function
placeOrder("Burger",()=>{
    console.log("Arrow fun,I am also a function without name");
});

test('has title',async ({page})=>{

}
);
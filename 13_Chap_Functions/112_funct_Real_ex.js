function validateStatusCode(status)
{
    if(status>=200 && status<=300 )
    {
        console.log("Request is fine!");
    }
}

const validateStatusCode_EXpression= function (status)
{
    if(status>=200 && status<=300)
    {
        console.log("Request is Fine!");

    }
}


const validateStatusCode_arrow=(status)=>{
    if(status>=200 && status<=300)
    {
        console.log("Request is fine!");
    }
}
validateStatusCode(205);
validateStatusCode_EXpression(206);
validateStatusCode_arrow(201);

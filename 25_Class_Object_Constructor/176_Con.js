class Credentials
{
    #apikey;

    constructor(user,key)
    {
        this.user=user;
        this.#apikey=key;

    }

    getAPI(){
        return this.#apikey;
    }
}

let cred=new Credentials("admin","#SecretKey_1234");
console.log(cred.user);
console.log(cred.getAPI());
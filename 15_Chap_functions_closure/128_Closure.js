function startBrowser()
{
    let name="edge";

    function installBrowser()
    {
        console.log(name);

    }
    return installBrowser;
}

const runtc=startBrowser();
runtc();
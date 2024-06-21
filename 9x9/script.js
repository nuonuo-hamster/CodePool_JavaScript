for(var i = 1; i < 10; i++)
{
    for(var j = 1; j < 10; j++)
    {
        var str = getString(i, j)
        console.log(str)
    }
}

function getString(i, j)
{
    var str = i + " x " + j + " = " + i*j
    return str
}
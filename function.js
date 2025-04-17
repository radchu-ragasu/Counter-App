let count = 0;


function Add()
{
    count++;
    document.getElementById('number').innerText = count;
}

function Subtract()
{
    count--;
    document.getElementById('number').innerText = count;
}

function Reset()
{
    count = 0;
    document.getElementById('number').innerText = count;
}
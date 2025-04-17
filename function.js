let count = 0;


function Add()
{
    count++;
    document.getElementById('number').innerText = count;
    OddEvenCheck(count);
}

function Subtract()
{
    if (count == 0)
    {
        document.getElementById('number').innerText = count;
        alert("Can't go below 0");
    }
    else{
        count--;
        document.getElementById('number').innerText = count;
    }
    
}

function Reset()
{
    count = 0;
    document.getElementById('number').innerText = count;
}


function OddEvenCheck(count)
{
    if (count == 0)
    {
        document.getElementById('OddEven').innerText = "This is Zero";
    }
    else if (count % 2 ==0)
    {
        document.getElementById('OddEven').innerText= "This is Even Number";
    }
    else if(count % 2 == 1)
    {
        document.getElementById('OddEven').innerText = "This is Odd Number";
    }
}
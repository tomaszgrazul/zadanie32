let num1 = 2;
let num2 = 5;
function wieksza(a, b)
{
    if(a>b)
    {
        return a;
    }
    if(b>a)
    {
        return b;
    }
    if(a==b)
    {
        return 0;
    }
}
if(wieksza(num1, num2)>0)
{
    console.log('wynik', wieksza(num1, num2));
}
else console.log('liczby są równe');


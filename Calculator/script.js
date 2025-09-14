
function compute()
{
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var op = document.getElementById("operand").value;
    var result=-1;
    switch(op)
    {
        case 'add':
            result = a+b;
            break;
        case 'sub':
            result = a-b;
            break;
        case 'mul':
            result = a * b;
            break;
        case 'div':
            if (b === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero.";
                return; // Exit the function if division by zero occurs.
            }
            result = a / b;
            break;
        default:
            result = "Invalid operation.";
    }
    document.getElementById("result").textContent ="Result = "+result;
}
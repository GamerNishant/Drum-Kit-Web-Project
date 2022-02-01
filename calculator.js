function add(num1, num2)
{
    return num1 + num2;
}
function multiply(num1, num2)
{
    return num1 * num2;
}
function sub(num1, num2)
{
    return num1 - num2;
}
function divide(num1, num2)
{
    return num1 / num2;
}

function calculator(num1, num2, operator)
{
    return operator(num1, num2);
}

console.log(calculator(5, 4, add));
console.log(calculator(5, 4, multiply));
console.log(calculator(5, 4, divide));
console.log(calculator(5, 4, sub));
// console.log(calculator(5, 4, add));
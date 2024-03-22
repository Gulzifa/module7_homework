function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        return a / b;
    }
}
let arguments = [2, 3, '+'];
const result = calculate.apply(null, arguments)

console.log(result);
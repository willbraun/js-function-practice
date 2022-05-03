// Function declaration
function sum(a,b) {
    return a + b;
}

// Function expression
const sum = function(a,b) {
    return a + b;
}

// Function declarations are hoisted and declared when the page loads
// Function expressions are declared only when that line of code is reached
// If you know you are going to be using a function, you can write it as a function declaration
// If you may not need to use a function, you can write it as a function expression inside an IF statement and declare it only if needed


// If we have a function that adds 2 to an integer, that function AND a function to check if a number is an integer
// ...can be written as a function declaration since they are always needed.
function checkIfInteger(num) {
    return Number.isInteger(num);
}

function intPlus2(num) {
    if (checkIfInteger(num)) {
        // If the number is an integer, the function that adds 2 can be written as a function expression
        // If the number is not an integer, this function expression is skipped so we don't waste time and energy on declaring it
        const sum = function(a,b) {
            return a + b;
        }
        return sum(num,2);
    }
    else {
        alert('Input is not an integer');
    }
}
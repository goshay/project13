//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        
    }
};
var createHelloWorld = function() {
    return () => "Hello World"
}
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//I still do not completely understand JS, so this solution is not my own. I find the solution, then learn why it is correct. Here's the explanation for this solution:

//The "createHelloWorld() function is declared with the arrow function syntax. The function body is not enclosed in curly braces, and the function arguments are passed in directly. The function returns the string "Hello World".

//The arrow function syntax is more concise and efficient than the function declaration syntax. It is also more flexible, as it can be used to declare functions that do not have any parameters or that return a value.
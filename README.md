# Unexpected String Concatenation with Arrays in TypeScript

This example demonstrates a common error in TypeScript where an array is passed to a function expecting a string. The result is unexpected string concatenation, rather than a type error.

## Bug
The `greeter` function expects a single string as an argument. When an array of strings is passed, the function will not throw an error, it will instead concatenate the array elements as strings.

## Solution
The solution involves either changing the `greeter` function to accept an array or ensuring that only a single string is passed to the function.  Type checking helps catch this error at compile time.
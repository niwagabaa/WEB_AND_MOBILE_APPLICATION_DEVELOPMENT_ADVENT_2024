// Variables are containers for storing values
// All javascript variables must be identified with unique names i.e identifiers
// Assignemnt operator "=" . Equal to operator "=="


// *If statement checks if the statement is true and excecutes the code
if (condition) {
    // Code to execute if condition is true
    }
    

// *THe If else statement checks if the code is true and excecutes the code ,and run another block
//of code if the condition is false (Using "else")
if (condition) {
    // Code to execute if condition is true
    } else {
    // Code to execute if condition is false
    }

    
//* When you have multiple conditions to check, you use else IF
if (condition1) {
    // Code if condition1 is true
    } else if (condition2) {
    // Code if condition2 is true
    } else {
    // Code if neither condition1 nor condition2 is true
    }
    
//* Nested ifs

//LOOPS
//For loops repeats a block of code for a specific number of times . Ideal when you know how many times
//you want to run the loop 

// for (initialization; condition; update) {
//     code to execute in each iteration
// }

// intialization: usually a variable is initialized to a starting value
// condition: loop runs as long as condition is true
// update: changes the variable in the intialization after each iteration

// A for loop that prints numbers from 1 to 5
for (let x = 1; x <= 5; x++) {
    console.log(x);
    
}
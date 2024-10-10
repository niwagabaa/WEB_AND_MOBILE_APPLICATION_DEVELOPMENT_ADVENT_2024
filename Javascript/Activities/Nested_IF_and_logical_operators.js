//Nested If Statements and Logical Operators
//Consider this code snippet:

let age = 18;
// if (age >=18) {
//     if (age < 65) {
//         console.log("You are eligible to work.");
//     } else {
//         console.log("You are of retirement age.");
//     }
// } else {
//     console.log("You are too young to work.");
    
// }

//Rewrite the code using a single if-else structure without nesting

if (age > 65) {
    console.log("You are of retirement age");
        
} else if (age < 65 && age >= 18) {
    console.log("You are eligible to work");
    
} else {
    console.log("You are too young to work");
    
}
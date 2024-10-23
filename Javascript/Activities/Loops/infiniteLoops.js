// Qn1
// Decribe what an infinute loop is and how it can ocur 
//Ans
//This is a loop that runs without stopping

// Qn2
// Provide an example of an infinite for loop and explain how to stop it
//Ans
//An infinite loop can be stopped 
//


//By 
// Qn3
// Consider the folling Javascript array:

let data = [
    { district: "Kampala", rainfall: 120 },
    { district: "Gulu", rainfall: 80 },
    { district: "Mbarara", rainfall: 95 }
];

// Write a for loop that iterates through the array and prints the district names and their rainfall levels

console.log(data[0].district);
console.log(data[0].rainfall);

console.log(data[1].district);
console.log(data[1].rainfall);

console.log(data[2].district);
console.log(data[2].rainfall);

//We shall use a for loop to manipulate that instead of printing all that

for(let z = 0; z < 3; z++){

    console.log(data[z].district);
    console.log(data[z].rainfall);

}
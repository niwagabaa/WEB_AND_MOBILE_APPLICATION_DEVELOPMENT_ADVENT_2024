//A js program that checks if the village has enough clean water for residents
//we are using an else if statement

let waterAvailable = 700;

if (waterAvailable > 500) {
    console.log("Enough Water.");
    
} else if (waterAvailable > 200 && waterAvailable < 500) {
    console.log("Water is limited");
    
} else if (waterAvailable < 200) {
    console.log("Water shotage");
    
}
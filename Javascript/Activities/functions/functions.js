//life before functions
var num = 23;

var num_two = 2;

var sum = num + num_two;
console.log("sum", sum);

var num_three = 40;

var num_four = 4;

var sum_two = num_three + num_four;

//Functions without parameters of arguments
//Viod Function

function summation(){

    var num_five = 40;

    var num_six = 4;

    var sum_three = num_five+ num_six;

    console.log("Sum three: ", sum_three);
}

summation();

//Returnig functions
function summation_two(){
    var num_five = 40;

    var num_six = 4;

    var sum_three = num_five+ num_six;

    return sum_three;
}

//Just calling it without any effect
summation_two();
//Using it by printing the value direct to terminal
console.log("Sum four: ", summation_two());
//Assigning the value to a variable
var sum_four = summation_two();


var sum_five = summation();

console.log(sum_five);

//Void Functions with Parameters
function summation_three(num_five,num_six){
    var sum_six = num_five + num_six;

    console.log("Sum six adding ", num_five, "+", num_six ,"=", sum_six);
}

summation_three(40,4);

summation_three(100,2);

summation_three(2551,4);

//returning functions with parameters
function summation_four(num_five,num_six){

    return num_five + num_six;
}

//Using it by printing value directly on terminal
console.log("Sum five: " ,summation_four(552,551));

//Assingining the valur to a variable
var sum_five = summation_four(456,455);
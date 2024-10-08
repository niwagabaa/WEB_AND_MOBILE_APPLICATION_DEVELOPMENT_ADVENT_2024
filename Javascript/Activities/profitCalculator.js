//Write a function calculateProfit that accepts the selling price, cost price, and number of units sold, 
//and returns the profits for a small business selling products like maize flour 

function calculateProfit(sellPrice,costPrice,units_sold){
    var final_sells = sellPrice * units_sold;
    var stock_bought = costPrice * units_sold;

    return(final_sells-stock_bought);

}
console.log("The profit made from selling flour is: ", calculateProfit(3000,2000,85));
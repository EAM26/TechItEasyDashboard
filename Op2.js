// 2a Create varibable as counterSold and use map to add tv.sold
let counterSold  = 0;
inventory.map((tv)=> {
    counterSold += tv.sold;
    return null;
})
console.log(counterSold);

// 2b Create id in index, use innerHTML to show counterSold, use id in css
const numberTvsSold = document.getElementById("number-tvs-sold");
numberTvsSold.innerHTML = "<h3>Number of tv's sold: "+counterSold+"</h3>";


// 2c + 2d  Create var to hold tv's bought
let counterBought = 0;
// use map to add value tv.originalStock
inventory.map((tv)=> {
    counterBought += tv.originalStock;
    return null;
})
// log total bought, create id in html and use innerHTML to show total tv's bought, use id in css
console.log(counterBought);
const numberTvsBought = document.getElementById("number-tvs-bought");
numberTvsBought.innerHTML = "<h3>Number of tv's bought: "+counterBought+"</h3>";

// 2e create var to calc tv's in stock (bought-sold), id in html, use inner html and css
const inStock = counterBought - counterSold;
const numberTvsInStock = document.getElementById("number-tvs-in-stock");
numberTvsInStock.innerHTML = "<h3>Number of tv's in stock: "+inStock+"</h3>"





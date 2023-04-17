function sortPriceLowHigh() {
    const sortedList = inventory.sort((a, b) => a.price - b.price);
    //bonus 1
    console.log(sortedList);
    // bonus 2
    document.getElementById("show-selection").innerHTML = showAllTVs(sortedList)
}

function sortPriceHighLow() {
    const sortedList = inventory.sort((a, b) => b.price - a.price);
    //bonus 1
    console.log(sortedList);
    // bonus 2
    document.getElementById("show-selection").innerHTML = showAllTVs(sortedList)
}

function showAmbiLight() {
    const hasAmbiLight = inventory.filter((tv) => tv.options.ambiLight===true);
    // bonus 1
    console.log(hasAmbiLight);
    // bonus 2
    document.getElementById("show-selection").innerHTML = showAllTVs(hasAmbiLight);
}

function showSoldOut() {
    const soldOut = inventory.filter((tv) => tv.sold===tv.originalStock);
    // bonus 1
    console.log(soldOut);
    // bonus 2
    document.getElementById("show-selection").innerHTML = showAllTVs(soldOut);
}

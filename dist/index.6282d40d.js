// 4a
// shows brand type and name
function showName(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}
// 4b
function showPrice(tv) {
    return "€" + tv.price + ",-";
}
// 4c
function showSizes(tv) {
    // count variable for adding slash if not last size
    let count = 1;
    let allSizes = "";
    tv.availableSizes.map((size)=>{
        allSizes += size + " inch (" + Math.round(size / 0.39370) + " cm)";
        if (count < tv.availableSizes.length) allSizes += " | ";
        count++;
    });
    return allSizes;
}
// 4d
function showInfoSingleTV(tv) {
    return showName(tv) + "<br>" + showPrice(tv) + "<br>" + showSizes(tv) + "<br><br>";
}
document.getElementById("info-single-tv").innerHTML = showInfoSingleTV(inventory.find((tv)=>tv.type === "43PUS6504/12"));
// 4e
function showAllTVs(myList) {
    // create variable for return value as one long string
    let infoAllTVs = "****************<br><br>";
    myList.map((tv)=>{
        infoAllTVs += showInfoSingleTV(tv);
    });
    infoAllTVs += "****************<br><br>";
    return infoAllTVs;
}
document.getElementById("show-selection").innerHTML = showAllTVs(inventory);

//# sourceMappingURL=index.6282d40d.js.map

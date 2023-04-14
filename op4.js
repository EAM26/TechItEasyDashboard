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
    // count for adding slash if not last size
    let count = 1;
    let allSizes = ""
    tv.availableSizes.map((size) => {
        allSizes += (size + " inch (" + Math.round(size / 0.39370) + " cm)")
        if(count < tv.availableSizes.length) {
            allSizes += " | "
        }
        count++;
    })
    return allSizes;
}

// 4d
function showInfoSingleTV(tv) {
    console.log(showName(tv));
    console.log(showPrice(tv));
    console.log(showSizes(tv));
    console.log("\n");
}

showInfoSingleTV(inventory.find((tv) => tv.type === "43PUS6504/12"))

// 4e
function showAllTVs(myList) {
    myList.map((tv)=> {
        showInfoSingleTV(tv);
    })
}

showAllTVs(inventory);







// 3a Collect all tv names with map and add to String
// create id and use innerHTML to make list
let brandNamesList = "<ul>";
inventory.map((tv) => {
    brandNamesList += "<li>" + tv.brand + "</li>";
});
brandNamesList +="</ul>";

document.getElementById("brand-names").innerHTML = brandNamesList;

// 3b    3a as function

function showBrandNames(tvList) {
    let brandNamesList = "<ul>";
    tvList.map((tv) => {
        brandNamesList += "<li>" + tv.brand + "</li>";
    });
    brandNamesList += "</ul>"
    return brandNamesList;
}

document.getElementById("brand-names-2").innerHTML = showBrandNames(inventory);



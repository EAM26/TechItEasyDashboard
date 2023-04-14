// 3a Collect all tv names with map
// create id and use innerHTML to make list
let brandNamesList = "";
inventory.map((tv) => {
    brandNamesList += "<li>" + tv.brand + "</li>";
});

const brandNamesId = document.getElementById("brand-names");
brandNamesId.innerHTML = brandNamesList;



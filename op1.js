// 1a Use array.map to create new array with type property
const allTypeNames = inventory.map((tv)=> tv.type);
console.log(allTypeNames)

// 1b collect all tv's and filter where sold === Original Stock
const soldOut = inventory.filter((tv) => tv.sold===tv.originalStock);
console.log(soldOut);

// 1c collect all tv's and filter where options.ambiLight === true
const hasAmbiLight = inventory.filter((tv) => tv.options.ambiLight===true);
console.log(hasAmbiLight);

// 1d Use sort to sort original array on price low => high
// inventory.sort((a, b) => a.price - b.price);
// console.log(inventory)
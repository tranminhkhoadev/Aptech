
//function randomPrice(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//let numOfOrder = 5;
//let total = 0;

//for (let i = 0; i < numOfOrder; i++) {
//    let price = randomPrice(100000, 5000000);
//    console.log("Giá món", i + 1, ":", price);
//    total += price;
//}

//console.log("Tổng tiền phải trả:", total);

//tolocalstring
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numOfOrder = 5;
let total = 0;

for (let i = 0; i < numOfOrder; i++) {
    let price = randomPrice(100000, 5000000);
    console.log("Giá món", i + 1, ":", price.toLocaleString());
    total += price;
}

console.log("Tổng tiền phải trả:", total.toLocaleString());

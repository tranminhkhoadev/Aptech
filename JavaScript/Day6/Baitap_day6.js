
function printName(name) {
    console.log(`Hello, ${name}`);
}

printName("Khoa"); 



function introduce(name, age, address) {
    console.log(`Xin chào tôi tên là ${name}, năm nay tôi ${age} tuổi. Tôi đang sống ở ${address}`);
}

introduce("Khoa", 15, "Canada");


function calculatePytago(canhGocVuong1, canhGocVuong2) {
    const binhPhuong1 = Math.pow(canhGocVuong1, 2);
    const binhPhuong2 = Math.pow(canhGocVuong2, 2);
    const canhHuyen = Math.sqrt(binhPhuong1 + binhPhuong2);
    return canhHuyen;
}

console.log(`Cạnh huyền có kết quả là: ${calculatePytago(3, 4)}`);



const calculator = (number1, number2, operator) => {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "*") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    }
};

console.log(calculator(10, 5, "+"));

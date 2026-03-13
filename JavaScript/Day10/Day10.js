const prompt = require("prompt-sync")();

let employees = [];

let nextId = 1;

let name = prompt("Nhập vào tên của bạn: ");

let email = prompt("Nhập email: ");

let phoneNumber = prompt("Nhập số điện thoại: ");

let gender = prompt("Nhập giới tính: ");

let position = prompt("Nhập vị trí: ");

let salary = prompt("Nhập lương: ");

let newEmployee = {
    id: nextId,
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    gender: gender,
    position: position,
    salary: salary
};

employees.push(newEmployee);

console.log("Danh sách nhân viên hiện tại:");
console.log(employees);
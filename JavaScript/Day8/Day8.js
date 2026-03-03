
// Tạo một mảng chứa các tỉnh thành Việt Nam (6 tỉnh)
// Dùng forEach lặp qua và in tên từng tỉnh thành.

const tinhThanh = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Cần Thơ",
  "Hải Phòng",
  "Đồng Nai"
];


tinhThanh.forEach(function(tinh) {
  console.log(tinh);
});




// Tạo một mảng gồm 10 số nguyên dương
// Dùng forEach lặp qua và lọc ra những số nguyên nào là số chẵn
// In kết quả


const nums = [1, 2, 3, 4, 5, 6, 10, 13, 18, 20];

const soChan = [];
nums.forEach(function(n) {
  if (n % 2 === 0) {
    soChan.push(n);
  }
});

console.log("Các số chẵn là:", soChan);

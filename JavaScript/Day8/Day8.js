
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


// Tạo một mảng chứa điểm trung bình của 1 lớp (10 bạn, thang điểm 10)
// Dùng array method thích hợp để:
// - kiểm tra xem lớp đó có bạn nào dưới trung bình hay không (<5)
// - kiểm tra xem lớp đó toàn bộ lớp có qua môn hay không (>=5)


const diemTB = [6.5, 7.2, 8.0, 4.8, 9.1, 5.0, 6.0, 3.9, 7.5, 8.3];

const coDuoiTrungBinh = diemTB.some(diem => diem < 5);

const tatCaQuaMon = diemTB.every(diem => diem >= 5);

console.log("Điểm trung bình lớp:", diemTB);
console.log("Có bạn nào dưới trung bình (<5) không? →", coDuoiTrungBinh ? "Có" : "Không");
console.log("Cả lớp có qua môn hết (>=5) không? →", tatCaQuaMon ? "Có" : "Không");


// Tạo một mảng chứa điểm môn Toán của cả lớp (10 bạn, thang điểm 10)
// Viết chương trình cộng thêm 1 điểm cho các bạn trong lớp (nếu bạn nào 10 điểm rồi không cộng nữa)



const diemToan = [4, 5.5, 6, 7.25, 8, 9, 9.5, 10, 3, 6.75];


const diemSauCong = diemToan.map(d => Math.min(d + 1, 10));

console.log("Điểm ban đầu:", diemToan);
console.log("Điểm sau khi cộng:", diemSauCong);


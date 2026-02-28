const findDayOfWeek = (day, month, year) => {
    const d = new Date(year, month - 1, day); 
    const dayNumber = d.getDay();

    switch (dayNumber) {
        case 0:
            return "Chủ Nhật";
        case 1:
            return "Thứ 2";
        case 2:
            return "Thứ 3";
        case 3:
            return "Thứ 4";
        case 4:
            return "Thứ 5";
        case 5:
            return "Thứ 6";
        case 6:
            return "Thứ 7";
        default:
            return "Ngày không hợp lệ";
    }
};

console.log("Hôm nay là: " + findDayOfWeek(27, 2, 2026));
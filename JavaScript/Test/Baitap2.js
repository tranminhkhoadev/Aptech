const workHours = [2, 4, 0, 5, 3, 6, 2];

const analyzeWorkTime = (hours) => {
    let totalHours = 0;

    for (let i = 0; i < hours.length; i++) {
        totalHours += hours[i];

        if (hours[i] >= 5) {
            console.log("Ngày thứ " + (i + 1) + " làm việc rất năng suất! :)");
        }
    }

    console.log("Tổng số giờ làm việc trong tuần: " + totalHours);
};
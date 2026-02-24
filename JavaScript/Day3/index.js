//let isRain = false;

//if (isRain === true) {
//    console.log("Mặc áo mưa")
//}
//else{

//    console.log("Đi về thôi")
//}



let sleepHours = 5; 

if (sleepHours < 5) {
  console.log(`Rất buồn ngủ vì hôm qua ngủ chỉ có ${sleepHours} tiếng`);
} else {
  if (sleepHours >= 5 && sleepHours < 7) {
    console.log(`Hơi mệt vì hôm qua ngủ chỉ có ${sleepHours} tiếng`);
  } else {
    if (sleepHours >= 7 && sleepHours < 9) {
      console.log(`Tỉnh táo vì hôm qua ngủ đủ ${sleepHours} tiếng`);
    } else {
      if (sleepHours > 9) {
        console.log(`Nhức đầu vì hôm qua ngủ tận ${sleepHours}  tiêng`);
      }
    }
  }
}
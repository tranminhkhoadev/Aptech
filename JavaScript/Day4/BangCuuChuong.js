let i = 1;

while (i <= 9) {
    console.log("-- Bảng nhân " + i + " --");
    let j = 1;
    
    while (j <= 10) {
        console.log(i + " x " + j + " = " + (i * j));
        j += 1;
    }
    
    i += 1;
}
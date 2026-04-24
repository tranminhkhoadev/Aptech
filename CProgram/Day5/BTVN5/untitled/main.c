#include <stdio.h>

#include <stdio.h>

int main() {
    float score;
    printf("Xin hãy nhập điểm của bạn (1-10) ");
    scanf("%f", &score);

    if (score < 0 || score > 10)
    {
        printf("Điểm không hợp lệ. Vui lòng nhập một giá trị từ 0 đến 10. ");
    }
    else {
        if (score < 3) {
            printf("Xếp hạng học lực: \"Yếu\" ");
        } else if (score < 5) {
            printf("Xếp hạng học lực: \"Trung Bình\" ");
        } else if (score < 7) {
            printf("Xếp hạng học lực: \"Giỏi\" ");
        } else if (score < 9) {
            printf("Xếp hạng học lực: \"Rat Giỏi\" ");
        } else {
            printf("Xếp hạng học lực: \"Xuất Sắc\" ");
        }
    }
    return 0;
}

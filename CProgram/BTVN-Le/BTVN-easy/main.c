#include <stdio.h>

int main() {
    int n;

    printf("Nhap so N (1-9): ");
    scanf("%d", &n);

    // 1. Validation check
    if (n < 1 || n > 9) {
        printf("Gia tri khong hop le.\n");
        return 0; // Ends the program
    }

    printf("Bang cuu chuong %d:\n", n);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", n, i, n * i);
    }

    return 0;
}

#include <stdio.h>

int main() {
    int h;

    do {
        printf("Nhap chieu cao h: ");
        scanf("%d", &h);
        if (h <= 0) {
            printf("Chieu cao phai > 0. Vui long nhap lai.\n");
        }
    } while (h <= 0);

    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= h - i; j++) {
            printf(" ");
        }

        for (int j = 1; j <= (2 * i - 1); j++) {
            if (j == 1 || j == (2 * i - 1) || i == h) {
                printf("*");
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}
#include <stdio.h>

int main() {
    char c;
    int hoa = 0, thuong = 0, so = 0;

    printf("Nhap cau cua ban: ");

    while ((c = getchar()) != '\n') {
        if (c >= 'A' && c <= 'Z') {
            hoa++;
        }
        else if (c >= 'a' && c <= 'z') {
            thuong++;
        }
        else if (c >= '0' && c <= '9') {
            so++;
            putchar(c);
        }
    }
    printf("\nKet qua dem:\n");
    printf("- Chu cai in hoa: %d\n", hoa);
    printf("- Chu cai in thuong: %d\n", thuong);
    printf("- Chu so: %d\n", so);

    return 0;
}

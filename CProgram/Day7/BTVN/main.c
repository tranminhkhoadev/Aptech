#include <stdio.h>
int main() {
    int n, a[100];
    int sum = 0;

    printf("Nhap so luong sinh vien: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Nhap diem sinh vien %d: ", i + 1);
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }

    printf("\na. Diem trung binh: %.2f", (float)sum / n);

    // Câu b: Find Max
    int max = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    printf("\nb. Diem cao nhat: %d", max);

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (a[i] < a[j]) {
                // Swap values
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    printf("\nc. Diem tu cao den thap: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }

    return 0;
}
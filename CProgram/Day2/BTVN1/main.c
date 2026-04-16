#include <stdio.h>
int main() {
    char name[20] = "Khoa";
    float diemToan = 6.0;
    float diemLy = 8.0;
    float diemVan = 9.0;
    float diemTrungBinh = (diemToan + diemLy + diemVan) / 3.0;
    int namSinh = 2011;
    float nganSachVND = 1000000.0;
    float nganSachUSD = 0.0;

    nganSachUSD = nganSachVND / 25000.0;

    printf("Ngan sach quy doi: %.2f USD\n", nganSachUSD);
    printf("Diem trung binh: %.1f\n", diemTrungBinh);

    return 0;
    }

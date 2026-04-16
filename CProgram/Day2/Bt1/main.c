#include <stdio.h>

int main() {
    // Khai báo biến điểm
    float diemToan, diemLy, diemVan;
    float diemTrungBinh;

    // Khai báo năm sinh
    int namSinh;

    // Khai báo ngân sách và tiền tệ
    double nganSachVND;
    double tyGiaUSD;
    double tienUSD, tienVND;

    // Nhập điểm
    printf("Nhap diem Toan: ");
    scanf("%f", &diemToan);

    printf("Nhap diem Ly: ");
    scanf("%f", &diemLy);

    printf("Nhap diem Van: ");
    scanf("%f", &diemVan);

    // Tính điểm trung bình
    diemTrungBinh = (diemToan + diemLy + diemVan) / 3;

    // Nhập năm sinh
    printf("Nhap nam sinh: ");
    scanf("%d", &namSinh);

    // Nhập ngân sách
    printf("Nhap ngan sach (VND): ");
    scanf("%lf", &nganSachVND);

    // Nhập tỷ giá USD
    printf("Nhap ty gia (1 USD = bao nhieu VND): ");
    scanf("%lf", &tyGiaUSD);

    // Chuyển đổi tiền
    tienUSD = nganSachVND / tyGiaUSD;
    tienVND = tienUSD * tyGiaUSD;

    // Xuất kết quả
    printf("\n===== KET QUA =====\n");
    printf("Diem trung binh: %.2f\n", diemTrungBinh);
    printf("Nam sinh: %d\n", namSinh);
    printf("Ngan sach: %.2f VND\n", nganSachVND);
    printf("So tien quy doi: %.2f USD\n", tienUSD);
    printf("Quy doi nguoc lai: %.2f VND\n", tienVND);

    return 0;
}
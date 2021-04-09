let a = prompt("nhập thu nhập 1 tháng của bạn")
let tax;
let b;
if (a > 0 && a <= 5000000) {
    tax = 0.05
} else if (a <= 10000000) {
    tax = 0.1
} else if (a <= 18000000) {
    tax = 0.15
} else if (a <= 32000000) {
    tax = 0.2
} else if (a <= 52000000) {
    tax = 0.25
} else if (a <= 80000000) {
    tax = 0.3
} else if (a > 80000000) {
    tax = 0.35
}
b = a*tax
alert("thuế bạn cần đóng là: " + b + " VNĐ ")
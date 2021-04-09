let a = +prompt("Sản lượng điện dùng trong tháng (kWh)")
let b;
let c;
if (a > 0 && a <= 50) {
    b = 1678
} else if (a <= 100) {
    b = 1734
} else if (a <= 200) {
    b = 2014
} else if (a <= 300) {
    b = 2536
} else if (a <= 400) {
    b = 2834
} else if (a > 400) {
    b = 2927
}
c = a*b
alert(
    "tiền điện tháng này của bạn là: "+ c +" VND"
)

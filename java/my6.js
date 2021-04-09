let a = +prompt("nhat gia tri cua a")
let b = +prompt("nhap gia tri cua b")
let x = -b / a
if (a === 0) {
    alert("phuong trinh vo nghiem")
} else {
    if (b === 0) {
        alert("pt vo so nghiem")
    } else {
        alert("pt co nghiem la: " + x)
    }
}

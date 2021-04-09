let a = +prompt("nhat so a")
let b = +prompt("nhat so b")
let c = +prompt("nhat so c")
let delta = b * b - 4 * a * c
let x1 = (-b + Math.sqrt(delta)) / (2 * a)
let x2 = (-b - Math.sqrt(delta)) / (2 * a)
let xx = -b / 2*a

if (delta === 0) {
    alert("PT co nghiem kep x = " + xx)
} else if (delta > 0) {
    alert("PT co 2 nghiem x1 = " + x1 + "x2 = " + x2)
} else {
    alert("PT vo nghiem")
}
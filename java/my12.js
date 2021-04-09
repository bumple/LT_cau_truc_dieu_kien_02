let p = +prompt("Số tiền vốn ban đầu")
let i = +prompt("Lãi suất hàng năm")
let n = +prompt("số năm")
let m = +prompt("số lần ghép lãi trong năm")

let Fn;


Fn = Math.pow(1+(i/m),n*m)*p
Fn1 = Math.round(Fn)
alert("số tiền nhận được sau "+ n +" năm " + " là " + Fn1 + " VNĐ")
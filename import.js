//cara memanggil file lain, import file
const hitung = require ('./print.js')

//cara mengggunakan file lain khusus method yang diinginkan
var print1 = hitung.tambah(60,3)
var print2 = hitung.kurang(60,3)
var print3 = hitung.kali(60,3)
var print4 = hitung.bagi(60,3)

console.log(print1,print2,print3,print4)

console.log(hitung.json.merek)

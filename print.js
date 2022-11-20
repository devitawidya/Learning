const tambah = (a,b) => {
    var c = Number(a) + Number(b);
    return c
}

const kurang = (a,b) => {
    var c = Number(a) - Number(b);
    return c
}

const kali = (a,b) => {
    var c = Number(a) * Number(b);
    return c
}

const bagi = (a,b) => {
    var c = Number(a) / Number(b);
    return c
}

//asserting json
const json = {
    "warna" : "hitam",
    "merek" : "honda"
}

//cara menghubungkan 2 file dengan module.exports
module.exports = {tambah,kurang,kali,bagi,json}
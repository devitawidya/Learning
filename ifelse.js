const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Masukan nilai: ');
var grade;
if(nilai>90){
    grade = "A"
} else if(nilai>80) {
    grade = "B+"
} else if (nilai>70){
    grade = "B"
} else {
    grade = "F"
}

console.log("Grade adalah = " + grade)

//CASE
const nilai2 = prompt('Masukan nilai: ');
var grade2;
switch(true){
    case nilai2 > 90:
        grade2 = "A";
        break;
    case nilai2 > 80:
        grade2 = "B+";
        break;
    case nilai2 > 70:
        grade2 = "B";
        break;
    default:
        grade2 = "F";
}
console.log("Grade adalah = " + grade2)
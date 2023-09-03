// Method pada Array

// 1. length -> Untuk mengetahui berapa jumlah elemen pada array

// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// console.log(myArr.length);

// 2. join -> Menggabungkan seluruh isi array dan mengubahnya menjadi sebuah string

// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// console.log(myArr.join(" - "));

// 3. push & pop
// push -> Untuk menambah elemen array diakhir arraynya
// pop -> Untuk menghilangkan elemen terakhir dari sebuah array

// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// myArr.push("Elon", "Musk");
// // myArr.pop();

// console.log(myArr.join(" - "));

// 4. unshift & shift
// unshift -> Untuk menambah elemen array diawal arraynya
// shift -> Untuk menghilangkan elemen pertama dari sebuah array

// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// myArr.unshift("Elon", "Musk");
// // myArr.shift();

// console.log(myArr.join(" - "));

// 5. splice & slice
// splice -> Untuk menambah elemen array ditengah arraynya
// slice -> Untuk mengiris sebuah array menjadi array yang baru

// splice(<indexAwal>, <mauDihapusBerapa>, <elemenBaru1>, <elemenBaru2>...);
// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// myArr.splice(2, 1, "Elon", "Musk");
// console.log(myArr.join(" - "));

// slice(<indexAwal>, <indexAkhir>);
// var myArr1 = ["Mochamad", "Nahrul", "Hayawan"];

// var myArr2 = myArr1.slice(0, 2);
// console.log(myArr2.join(" - "));

// 6. forEach & map
// forEach -> Bisa melakukan sesuatu pada elemen arraynya secara otomatis
// map -> Sama seperti forEach tapi map bisa mengembalikan nilai array

// var myArr = ["Mochamad", "Nahrul", "Hayawan"];

// myArr.forEach(function(e, i) {
//   console.log("Mahasiswa ke " + (i+1) + " : " + e);
// });

// var myArr1 = [1, 2, 3, 4, 5];

// var myArr2 = myArr1.map(function(e) {
//   return e * 2;
// });

// console.log(myArr2.join(" - "));

// 7. sort -> Untuk mengurutkan nilai/huruf elemennya

// var myArr = [1, 3, 5, 2, 4, 6];

// myArr.sort();
// console.log(myArr.join(" - "));

// var myArr = [1, 3, 10, 5, 2, 20, 4, 6];

// myArr.sort(function(a, b) {
//   return a - b;
// });

// console.log(myArr.join(" - "));

// 8. filter & find
// filter -> Untuk mencari elemen pada array dan bisa mengembalikan banyak nilai
// find -> Sama seperti filter tetapi find hanya bisa mengembalikan satu nilai

// var myArr1 = [1, 3, 10, 5, 2, 20, 4, 6];

// myArr1.sort(function(a, b) {
//   return a - b;
// });

// var myArr2 = myArr1.filter(function(e) {
//   return e > 5;
// });

// console.log(myArr2.join(" - "));

var myArr1 = [1, 3, 10, 5, 2, 20, 4, 6];

myArr1.sort(function (a, b) {
  return a - b;
});

var myArr2 = myArr1.find(function (e) {
  return e > 5;
});

console.log(myArr2.toString());

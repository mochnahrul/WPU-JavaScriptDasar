// var -> Function Scope
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log(i);

// SIAF var -> Block Scope
// (function() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }());

// console.log(i);

// let -> Block Scope
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log(i);

// const -> Block Scope
// const: Untuk meminimalisir perubahan state
// const i = 10;
// i = 20;

// console.log(i);

// Jika menggunakan object, nilai variabel dapat diubah
const i = {
  angka: 10,
};

i.angka = 20;
console.log(i.angka);

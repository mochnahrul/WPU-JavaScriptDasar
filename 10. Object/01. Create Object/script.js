// Object Lireral
// var mahasiswa = {
//   nama: "Mochamad Nahrul",
//   nim: 15190009,
//   kelas: "15.4A.28",
//   jurusan: "Ilmu Komputer",
//   ipSemester: [4.00, 4.00, 4.00, 4.00],
//   ipKumulatif: function() {
//     var total = 0;
//     var ips = this.ipSemester;

//     for (var i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }

//     return total / ips.length;
//   };
// };

// console.log(
//   "Nama: " + mahasiswa.nama + "\nNim: " + mahasiswa.nim
//   + "\nKelas: " + mahasiswa.kelas + "\nJurusan: " + mahasiswa.jurusan
//   + "\nIPK: " + mahasiswa.ipKumulatif().toFixed(2)
// );

// Function Declaration
// function objectMahasiswa(nama, nim, kelas, jurusan, ipSemester) {
//   var mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.nim = nim;
//   mahasiswa.kelas = kelas;
//   mahasiswa.jurusan = jurusan;
//   mahasiswa.ipSemester = ipSemester;
//   mahasiswa.ipKumulatif = function() {
//     var total = 0;
//     var ips = this.ipSemester

//     for (var i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }

//     return total / ips.length;
//   };

//   return mahasiswa;
// };

// var dataMahasiswa = objectMahasiswa(
//   "Mochamad Nahrul",
//   15190009,
//   "15.4A.28",
//   "Ilmu Komputer",
//   [4.00, 4.00, 4.00, 4.00]
// );

// console.log(
//   "Nama: " + dataMahasiswa.nama + "\nNIM: " + dataMahasiswa.nim
//   + "\nKelas: " + dataMahasiswa.kelas + "\nJurusan: " + dataMahasiswa.jurusan
//   + "\nIPK: " + dataMahasiswa.ipKumulatif().toFixed(2)
// );

// Constructor Function
function Mahasiswa(nama, nim, kelas, jurusan, ipSemester) {
  this.nama = nama;
  this.nim = nim;
  this.kelas = kelas;
  this.jurusan = jurusan;
  this.ipSemester = ipSemester;
  this.ipKumulatif = function () {
    var total = 0;
    var ips = this.ipSemester;

    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }

    return total / ips.length;
  };
}

var dataMahasiswa = new Mahasiswa("Mochamad Nahrul", 15190009, "15.4A.28", "Ilmu Komputer", [4.0, 4.0, 4.0, 4.0]);

console.log("Nama: " + dataMahasiswa.nama + "\nNIM: " + dataMahasiswa.nim + "\nKelas: " + dataMahasiswa.kelas + "\nJurusan: " + dataMahasiswa.jurusan + "\nIPK: " + dataMahasiswa.ipKumulatif().toFixed(2));

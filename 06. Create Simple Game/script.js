var loop = true;

while (loop) {
  var comp = Math.random();
  var result = "";
  var player = prompt("Pilih: Gajah, Semut, Orang");

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }

  if (player == comp) {
    result = "SERI!";
  } else if (player == "Gajah") {
    result = comp == "Orang" ? "MENANG!" : "KALAH!";
  } else if (player == "Semut") {
    result = comp == "Gajah" ? "MENANG!" : "KALAH!";
  } else if (player == "Orang") {
    result = comp == "Semut" ? "MENANG!" : "KALAH!";
  } else {
    result = "memasukkan pilihan yang salah!";
  }

  alert("Kamu memilih: " + player + "\nComp memilih: " + comp + "\nMaka hasilnya: Kamu " + result);

  loop = confirm("Ingin bermain lagi?");
}

// Latihan membuat game tebak angka
// var angka = Math.floor(Math.random() * 5) + 1;

// alert("Tebak angka dari 1 - 5 \nKamu ada 3 kesempatan");

// for (var i = 3; i >= 1; i--) {
//   var kesempatan = i;
//   kesempatan--;
//   var tebak = prompt("Masukan angka tebakan");

//   if (tebak == angka) {
//     alert("Tebakan benar! \nAngka yang dicari adalah " + angka);
//     i = 1;
//   } else if (tebak < angka) {
//     if (kesempatan >= 1) {
//       alert("Terlalu rendah! \nKamu masih ada " + kesempatan + " kesempatan");
//     } else {
//       alert("Terlalu rendah! \nKesempatan kamu habis");
//     }
//   } else if (tebak > angka) {
//     if (kesempatan >= 1) {
//       alert("Terlalu besar! \nKamu masih ada " + kesempatan + " kesempatan");
//     } else {
//       alert("Terlalu besar! \nKesempatan kamu habis");
//     }
//   } else {
//     alert("Masukan angka dari 1 - 5");
//   }
// }

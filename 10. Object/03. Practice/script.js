function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong!");
      return false;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          if (bayar >= 2000) {
            this.penumpang[i] = undefined;
            this.kas += bayar;
          } else {
            console.log("Uang bayar kurang!");
          }
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          console.log(namaPenumpang + " tidak ada di dalam angkot!");
          return this.penumpang;
        }
      }
    }
  };
}

var angkot1 = new Angkot("Mochamad", ["Cikembang", "Lembursitu"], [], 0);
var angkot2 = new Angkot("Nahrul", ["Lembursitu", "Kota"], [], 0);

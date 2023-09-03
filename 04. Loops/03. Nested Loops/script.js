var pola1 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= i; j++) {
    pola1 += "*";
  }
  pola1 += "\n";
}

console.log(pola1);

var pola2 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 4; j >= i; j--) {
    pola2 += "*";
  }
  pola2 += "\n";
}

console.log(pola2);

var pola3 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 4; j >= i; j--) {
    pola3 += " ";
  }
  for (var k = 1; k <= i; k++) {
    pola3 += "*";
  }
  pola3 += "\n";
}

console.log(pola3);

var pola4 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= i; j++) {
    pola4 += " ";
  }
  for (var k = 4; k >= i; k--) {
    pola4 += "*";
  }
  pola4 += "\n";
}

console.log(pola4);

var pola5 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 4; j >= i; j--) {
    pola5 += " ";
  }
  for (var k = 1; k <= i; k++) {
    pola5 += "*";
  }
  for (var l = 2; l <= i; l++) {
    pola5 += "*";
  }
  pola5 += "\n";
}

console.log(pola5);

var pola6 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= i; j++) {
    pola6 += " ";
  }
  for (var k = 4; k >= i; k--) {
    pola6 += "*";
  }
  for (var l = 3; l >= i; l--) {
    pola6 += "*";
  }
  pola6 += "\n";
}

console.log(pola6);

var pola7 = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 4; j >= i; j--) {
    pola7 += " ";
  }
  for (var k = 1; k <= i; k++) {
    pola7 += "*";
  }
  for (var l = 2; l <= i; l++) {
    pola7 += "*";
  }
  pola7 += "\n";
}

for (var i = 2; i <= 4; i++) {
  for (var j = 1; j <= i; j++) {
    pola7 += " ";
  }
  for (var k = 4; k >= i; k--) {
    pola7 += "*";
  }
  for (var l = 3; l >= i; l--) {
    pola7 += "*";
  }
  pola7 += "\n";
}

console.log(pola7);

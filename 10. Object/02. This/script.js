// This adalah sebuah keywords special yang secara otomatis didefinisikan pada setiap function

// Object Literal -> This mengembalikan object yang bersangkutan
// var obj = {};

// obj.literal = function() {
//   console.log(this);
// };

// obj.literal();

// Function Declaration -> This mengembalikan object global
// function declaration() {
//   console.log(this);
// };

// declaration();

// Constructor Function -> This mengembalikan object yang baru dibuat
function Constructor() {
  console.log(this);
}

var obj1 = new Constructor();
var obj2 = new Constructor();
